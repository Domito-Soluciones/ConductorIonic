import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController,AlertController } from '@ionic/angular';
import { Constantes } from 'src/app/intercace/constantes';
import { ActivatedRoute, Router } from '@angular/router';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service';
import { DesasignarServicioService } from 'src/app/service/desasignar-servicio.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HistoricoDetalleService } from 'src/app/service/historico-detalle.service';


@Component({
  selector: 'app-historicodetalle',
  templateUrl: './historicodetalle.page.html',
  styleUrls: ['./historicodetalle.page.scss'],
})
export class HistoricodetallePage implements OnInit {

  idServicio:string;
  cliente:string;
  fecha:string;
  hora:string;
  estado:number;
  ruta:string;
  truta:string;
  tarifa:string;
  cantidad:number = 0;
  observacion:string;
  pasajeros:any[] = [];
  servicio:any[]=[];


  constructor(private programadodetalleService:ProgramadodetalleService,
              private toastController: ToastController,
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private aceptarServicioService:AceptarServicioService,
              private desasignarServicioService:DesasignarServicioService,
              private alertCtrl: AlertController,
              private callNumber: CallNumber,
              private historicoDetalleService:HistoricoDetalleService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idServicio = this.activatedRoute.snapshot.paramMap.get("id")
      this.obtenerServiciosProgramadoDetalle();
  });
  }

  
  obtenerServiciosProgramadoDetalle(){
    this.servicio= [];
    let respuesta = this.historicoDetalleService.obtenerHistoricoDetalle(this.idServicio);
    respuesta.subscribe(data => {
      let aux = data;
      for(var i = 0 ; i < aux.length;i++){
          let pjro = {"pasajero_nombre" : aux[i].servicio_pasajero_nombre,
                    "pasajero_celular" :"",
                    "pasajero_destino": aux[i].servicio_destino};  
        this.pasajeros.push(pjro);
        if(aux[i].servicio_observacion === ''){
          aux[i].servicio_observacion = 'Sin observaciones';
        }
        if(i === 0){
          let arreglo = aux[i].servicio_fecha.split("-");
          this.idServicio = aux[i].servicio_id;
          this.cliente = aux[i].servicio_cliente;
          this.fecha = arreglo[0] + "/" + arreglo[1] + "/"+ arreglo[2];
          this.hora = aux[i].servicio_hora;
          this.estado = aux[i].servicio_estado;
          this.ruta = aux[i].servicio_ruta;
          this.truta = aux[i].servicio_truta;
          this.tarifa = aux[i].servicio_tarifa;
          this.observacion = aux[i].servicio_observacion;
        }
        this.cantidad = this.cantidad+1;
      }
    }, error => {
     console.log(error);
   });  
    
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  volver(){
    this.router.navigate(['./menu/historico']);
  }

}
