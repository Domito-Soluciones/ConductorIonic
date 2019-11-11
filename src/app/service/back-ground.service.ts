import { Injectable } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Platform } from '@ionic/angular';
import { Constantes } from '../intercace/constantes';
import { ProgramadoService } from './programado.service';
import { Observable } from 'rxjs';
import { NotificacionService } from './notificacion.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CambiarEstadoNotificacionService } from './cambiar-estado-notificacion.service';

@Injectable({
  providedIn: 'root'
})
export class BackGroundService {
  
  constructor(private platform: Platform,
              private backgroundMode: BackgroundMode,
              private localNotifications:LocalNotifications,
              private programadoService:ProgramadoService,
              private notificacionService:NotificacionService,
              private cambiarEstadoNotificacion:CambiarEstadoNotificacionService) { 
  }

  interval:any;
  respuestaProgramado:Observable<any>;
  respuestaNotificacion:Observable<any>;
  respuestaCambiaNotificacion:Observable<any>;

  iniciar() {
    this.platform.ready().then(() => {
      this.backgroundMode.enable();
      this.interval = setInterval(()=>{
        this.asignacion();
      },3000);
    });
  }

  finalizar(){
    clearInterval(this.interval);
  }

  asignacion(){
    if(Constantes.conductor.activo){
      this.obtenerServicios();
      this.obtenerNotificaciones();
      if(Constantes.conductor.estado === 1){
        this.obtenerUbicacion();
      }
      if (Constantes.conductor.navegando /*&& Constantes.conductor.location != null*/) {
        this.insertarNavegacion();
      }

      if (Constantes.conductor.location != null && Constantes.conductor.locationDestino != null) {
          let options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0};
          let lat1 = 0;
          let lon1 = 0;
          let lat2 = 0;
          let lon2 = 0;
          Constantes.conductor.location.getCurrentPosition((pos)=>{
            lat1 = pos.coords.latitude;
            lon1 = pos.coords.longitude;
              Constantes.conductor.location.getCurrentPosition((pos)=>{
                lat2 = pos.coords.latitude;
                lon2 = pos.coords.longitude;
                let distancia = this.calculateDistance(lat1,lon1,lat2,lon2);
                this.execUbicacion(distancia);
              },(err)=>{
                console.log('ERROR(' + err.code + '): ' + err.message);
              },
              options);
          },(err)=>{
            console.log('ERROR(' + err.code + '): ' + err.message);
          },
          options);
      }

    }
  }

  obtenerServicios(){
    this.respuestaProgramado = this.programadoService.obtenererviciosProgramados();
      this.respuestaProgramado.subscribe(data => {
        Constantes.programados = data;
        console.log(data.length);
      }, error => {
           console.log(error);
     });
  }

  obtenerNotificaciones(){
    this.respuestaNotificacion = this.notificacionService.obtenerNotificaciones();
      this.respuestaNotificacion.subscribe(data => {
        this.manejarNotificaciones(data);
      }, error => {
           console.log(error);
     });
  }

  obtenerUbicacion(){

  }

  insertarNavegacion(){

  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis);
}


  abrirActivity(){
  
  }

  execUbicacion(distancia:number){
    if (distancia < 50) {
      if(Constantes.conductor.servicioActual != null) {
          this.abrirActivity();
          Constantes.conductor.locationDestino = null;
          if(Constantes.conductor.servicioActualRuta.indexOf("RG") != -1)
          {
            Constantes.conductor.pasajeroRecogido = true;
          }
          else if(Constantes.conductor.servicioActualRuta.indexOf("ZP") != -1)
          {
            Constantes.conductor.pasajeroRepartido = true;
          }
          else
          {
            Constantes.conductor.pasajeroRecogido = true;
          }
      }
  }
}

manejarNotificaciones(array:any[]){
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].notificacion_tipo === "0") {
          aux++;
      }
    }
    if(aux > 20){
        this.localNotifications.schedule({
          id: 99999999,
          text: 'Tiene mas de 20 notificaciones de servicio, favor gestionar',
          sound: null
        });
    }
    let respuesta = [];
    for (let i = 0; i < array.length; i++) {
            let id = array[i].notificacion_id;
            let tipo = array[i].notificacion_tipo;
            respuesta[0] = id;
            respuesta[1] = tipo;
            if(tipo === "0") {
              this.localNotifications.schedule({
                id: id,
                text: array[i].notificacion_texto,
                sound: null
              });
            }
            else if(tipo === "1")
            {
                let fecha = array[i].notificacion_fecha;
                let date = fecha.getTime();
                let dateNow = new Date().getTime();
                if(Math.abs(date - dateNow) < 1.8e+6) {
                  this.localNotifications.schedule({
                    id: id,
                    text: array[i].notificacion_texto,
                    sound: null
                  });
                }
            }
            else if(tipo === "2"){
              this.localNotifications.schedule({
                id: id,
                text: array[i].notificacion_texto,
                sound: null
              });
            }
        
    }
    if (respuesta[0] != null && respuesta[1] != null) {
      if (respuesta[1] === "1" || respuesta[1] === "2") {
          this.respuestaCambiaNotificacion = this.cambiarEstadoNotificacion.cambiarEstadoNotificacion(respuesta[0]);
          this.respuestaCambiaNotificacion.subscribe(data => {
           
          }, error => {
               console.log(error);
         });
      }
  }
}



}
