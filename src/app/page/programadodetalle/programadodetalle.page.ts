import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController,AlertController } from '@ionic/angular';
import { Constantes } from 'src/app/intercace/constantes';
import { ActivatedRoute, Router } from '@angular/router';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service';
import { DesasignarServicioService } from 'src/app/service/desasignar-servicio.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-programadodetalle',
  templateUrl: './programadodetalle.page.html',
  styleUrls: ['./programadodetalle.page.scss'],
})
export class ProgramadodetallePage implements OnInit {

  programadoDetalle:any[] = [];
  respuestaProgramadoDetalle:Observable<any>;
  idServicio:any;
  cantidad:number;
  programados:any[];
  fechaServicio:string;
  horaServicio:string;
  pasajeros:any[] = [];

  @ViewChild("fecha", {static: false}) fecha: ElementRef;
  @ViewChild("hora", {static: false}) hora: ElementRef;

  constructor(private programadodetalleService:ProgramadodetalleService,
              private toastController: ToastController,
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private aceptarServicioService:AceptarServicioService,
              private desasignarServicioService:DesasignarServicioService,
              private alertCtrl: AlertController,
              private callNumber: CallNumber ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idServicio = this.activatedRoute.snapshot.paramMap.get("id")
      this.obtenerServiciosProgramadoDetalle();
  });
  }

  
  obtenerServiciosProgramadoDetalle(){
    let aux = Constantes.programados;
    this.programados = aux;
    let j = 0;
    let primero = aux[0];
    let ruta = primero.servicio_truta;
    if(ruta.indexOf("ZP") != -1){
      let empresa = {"pasajero_nombre" : primero.servicio_cliente,
        "pasajero_celular" : "",
        "pasajero_destino": primero.servicio_cliente_direccion}
        this.pasajeros.push(empresa); 
    }
    for(var i = 0 ; i < aux.length;i++){
        let pjro = {"pasajero_nombre" : aux[i].servicio_pasajero_nombre,
                  "pasajero_celular" : aux[i].servicio_pasajero_celular,
                  "pasajero_destino": aux[i].servicio_destino}
        if(aux[i].servicio_truta.indexOf("ZP") != -1){
          if(aux[i].servicio_estado !== "3" && aux[i].servicio_estado !== "2"){
            this.pasajeros.push(pjro);
          }
        }
        else if(aux[i].servicio_truta.indexOf("RG") != -1){
          if(aux[i].servicio_estado !== "3" && aux[i].servicio_estado !== "2" && aux[i].servicio_estado !== "1"){
            this.pasajeros.push(pjro);
          }
        }
        else if(aux[i].servicio_truta.indexOf("XX") != -1){
          if(aux[i].servicio_estado !== "3" && aux[i].servicio_estado !== "2" && aux[i].servicio_estado !== "1"){
            if(aux[i].servicio_destino !== ""){
              this.pasajeros.push(pjro);
            }
          }
        }
      if(aux[i].servicio_observacion === ''){
        aux[i].servicio_observacion = 'Sin observaciones';
      }
      let arreglo = aux[i].servicio_fecha.split("-");
      this.fechaServicio = arreglo[2] + "-" + arreglo[1] + "-"+ arreglo[0];
      this.horaServicio = aux[i].servicio_hora;
      if(aux[i].servicio_id === this.idServicio){
        j++;
        if(this.programadoDetalle.length === 0){
          this.programadoDetalle.push(aux[i]);
        }
      }
    }
    let ultimo = aux[Constantes.programados.length -1 ];
    if(ruta.indexOf("RG") != -1){
      let empresa = {"pasajero_nombre" : ultimo.servicio_cliente,
        "pasajero_celular" : "",
        "pasajero_destino": ultimo.servicio_cliente_direccion}
        this.pasajeros.push(empresa); 
    }
    this.cantidad = j;
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  aceptarServicio(estado:any){
    //agregr cancelar todas las notificaciones
    if(estado === '1'){
      this.aceptarServicioService.cambiarEstadoServicio(this.idServicio,'3','');
      this.router.navigate(['./menu/programado/']);
    }
    else if(estado === '3'){
      let now = Math.round(new Date().getTime()/1000);
      let fecha = new Date(this.fechaServicio+" "+this.horaServicio).getTime() / 1000;
      if((fecha - now) <= 36000 &&  now < fecha){
        this.aceptarServicioService.cambiarEstadoServicio(this.idServicio,'4','');
        this.router.navigate(['./pasajero/'+this.idServicio]);
      }
      else{
        this.mostrarMensaje("Falta mas de 1 hora para el inicio del servicio");
      }
    }
    else if(estado === '4'){
      this.router.navigate(['./pasajero/'+this.idServicio]);
    }
    
  }

  async cancelarServicio(estado:any){
    const alert = await this.alertCtrl.create({
      message: '¿Esta seguro que desea rechazar este servicio?',
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
              this.desasignarServicioService.desasignarServicio(this.idServicio);
              this.router.navigate(['./menu/programado']);
          }
        }
      ]
   });
   await alert.present(); 
  }

  continuarServicio(estado:any){
    
  }

   llamar(numero){
     this.callNumber.callNumber(numero, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
   }

  volver(){
    this.router.navigate(['./menu/programado']);
  }

}
