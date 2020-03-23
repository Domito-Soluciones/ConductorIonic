import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constantes } from 'src/app/intercace/constantes';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator,LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service';
import { CambiarEstadoPasajerosService } from 'src/app/service/cambiar-estado-pasajeros.service';
import { CambiarEstadoPasajeroService } from 'src/app/service/cambiar-estado-pasajero.service';
import { ProgramadoService } from 'src/app/service/programado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  servicio:any[] = [];
  idServicio:any;
  tipoRuta:any;
  cliente:any;
  fecha:any;
  tarifa:any;
  respuesta:Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private callNumber: CallNumber,
              private launchNavigator: LaunchNavigator,
              private alertCtrl: AlertController,
              private toastController: ToastController,
              private aceptarServicioService:AceptarServicioService,
              private cambiarEstadoPasajerosService:CambiarEstadoPasajerosService,
              private cambiarEstadoPasajeroService:CambiarEstadoPasajeroService,
              private programadoService:ProgramadoService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idServicio = this.activatedRoute.snapshot.paramMap.get("id")
      this.cargarPasajeros();
  });

  }

  cargarPasajeros(){
    this.respuesta = this.programadoService.obtenererviciosProgramado(this.idServicio);
    this.respuesta.subscribe(data => {
      this.tipoRuta = data[0].servicio_truta;
      this.cliente = data[0].servicio_cliente;
      this.fecha = data[0].servicio_fecha+" "+data[0].servicio_hora;
      this.tarifa = data[0].servicio_tarifa1;
      if(Constantes.conductor.zarpeIniciado && this.tipoRuta.indexOf("ZP") != -1){
        let empresa = {"pasajero_nombre" : data[0].servicio_cliente,
        "pasajero_celular" : "",
        "pasajero_destino": data[0].servicio_cliente_direccion}
        this.servicio.push(empresa); 
      }
      for(let i = 0;i < data.length; i++){
        this.servicio.push(data[i]); 
      }
      if(this.tipoRuta.indexOf("RG") != -1){
        let empresa = {"pasajero_nombre" : data[0].servicio_cliente,
        "pasajero_celular" : "",
        "pasajero_destino": data[0].servicio_cliente_direccion}
        this.servicio.push(empresa); 
      }
    }, error => {
       console.log(error);
     });

  }

  volver(){
    this.router.navigate(['./menu/programado']);
  }

  llamar(numero){
    this.callNumber.callNumber(numero, true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
  }

  navegar(destino){
    let opciones: LaunchNavigatorOptions = {
      start: 'London, ON'
      //app: LaunchNavigator.APP.GOOGLE_MAPS 
    }
    
    this.launchNavigator.navigate(destino, opciones)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  async confirmar(idPasajero:any){
    if (this.tipoRuta.indexOf("RG") > -1){
      Constantes.conductor.pasajeroActual = idPasajero;
      if(idPasajero === "0"){
        const alert = await this.alertCtrl.create({
          message: '¿ Esta seguro que desea dejar al pasajero aquí ?',
          buttons: [
            {
              text: 'No',
              role: 'No',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => {
                  Constantes.conductor.pasajeroRecogido = false;
                  this.cambiarEstadoPasajeroService.cambiarEstadoPasajero(this.idServicio,idPasajero,"1","","");
                  //agregar el geocoder de TomarPasajeroOperation.java
              }
            }
          ]
       });
       await alert.present(); 
      }
      else{
        this.finalizar();
      }
    }
    else if (this.tipoRuta.indexOf("ZP") > -1){
      if(Constantes.conductor.zarpeIniciado){
        Constantes.conductor.pasajeroActual = idPasajero;
        const alert = await this.alertCtrl.create({
          message: '¿ Esta seguro que desea dejar al pasajero aquí ?',
          buttons: [
            {
              text: 'No',
              role: 'No',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => {
                  Constantes.conductor.pasajeroRepartido = false;
                  this.cambiarEstadoPasajeroService.cambiarEstadoPasajero(this.idServicio,idPasajero,"3","",this.tipoRuta);

                }
            }
          ]
       });
       await alert.present(); 
      }
      else{
        const alert = await this.alertCtrl.create({
          message: '¿ Esta seguro que llegaste al punto de origen ?',
          buttons: [
            {
              text: 'No',
              role: 'No',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => {
                Constantes.conductor.zarpeIniciado = true;
                this.recargarPasajeros();
              }
            }
          ]
       });
       await alert.present(); 
      }
    }
    else if (this.tipoRuta.indexOf("ESP") > -1){
      //servicio especial
    }
  }

  async cancelar(idPasajero:any){
      if (this.tipoRuta.indexOf("ZP") > -1){
        Constantes.conductor.pasajeroRecogido = false;
      }
      Constantes.conductor.pasajeroActual = idPasajero;
      if (idPasajero === "0") {
        const alert = await this.alertCtrl.create({
          message: '¿ Esta seguro que desea cancelar el servicio ?',
          buttons: [
            {
              text: 'No',
              role: 'No',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => {
                  this.presentPromptMotivo();
              }
            }
          ]
       });
       await alert.present(); 
      }
      else{
        const alert = await this.alertCtrl.create({
          message: '¿ Esta seguro que este pasajero no abordara ?',
          buttons: [
            {
              text: 'No',
              role: 'No',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => {
                  this.presentPromptMotivoPasajero(idPasajero);
              }
            }
          ]
       });
       await alert.present(); 
      }

  }

  async presentPromptMotivo() {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'motivo',
          placeholder: 'Ingrese motivo'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: data => {
            if(data.motivo !== ""){
              this.aceptarServicioService.cambiarEstadoServicio(this.idServicio,'6',data.motivo);
              this.cambiarEstadoPasajerosService.cambiarEstadoPasajeros(this.idServicio,'2');
              this.mostrarMensaje("Servicio cancelado");
              this.router.navigate(['./menu/programado/']);
            }
            else{
              this.mostrarMensaje("Debe ingresar un motivo de cancelación");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPromptMotivoPasajero(idPasajero:string) {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          type: 'radio',
          label: 'Pasajero no contactado',
          value: '0',
        },
        {
          type: 'radio',
          label: 'Pasajero enfermo',
          value: '1',
        },
        {
          type: 'radio',
          label: 'Otro motivo',
          value: '2',
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            let opcion = parseInt(JSON.stringify(data));
            if(opcion != 2){
              let obs= '';
              if(opcion === 0){
                obs = 'Pasajero no contactado';
              }
              else if (opcion === 1){
                obs = 'Pasajero enfermo';
              }
              this.cambiarEstadoPasajeroService.cambiarEstadoPasajero(this.idServicio,idPasajero,"2",obs,"");
            }
            else if(opcion === 2){
              this.presentPromptMotivoCancelacion(idPasajero);
            }

          }
        }
      ]
    });
    await alert.present();
  }

  async presentPromptMotivoCancelacion(idPasajero:string) {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'observacion',
          placeholder: 'Ingrese observación'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: data => {
            this.cambiarEstadoPasajeroService.cambiarEstadoPasajero(this.idServicio,idPasajero,"2",data.observacion,"");
          }
        }
      ]
    });
    await alert.present();
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  finalizar(){
    this.aceptarServicioService.cambiarEstadoServicio(this.idServicio,"5","");
    this.cambiarEstadoPasajerosService.cambiarEstadoPasajeros(this.idServicio,"3");
    Constantes.conductor.zarpeIniciado = false;
    Constantes.conductor.locationDestino = null;
    this.router.navigate(['./finservicio/'+this.idServicio+'/'+this.cliente+'/'+this.fecha+'/'+this.tarifa]);
  }

  recargarPasajeros(){
    this.cargarPasajeros();
  }
}

