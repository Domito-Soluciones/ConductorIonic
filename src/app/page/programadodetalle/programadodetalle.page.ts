import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController } from '@ionic/angular';
import { Constantes } from 'src/app/intercace/constantes';
import { ActivatedRoute, Router } from '@angular/router';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service';

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
  estado:any;

  @ViewChild("fecha", {static: false}) fecha: ElementRef;
  @ViewChild("hora", {static: false}) hora: ElementRef;

  constructor(private programadodetalleService:ProgramadodetalleService,
              private toastController: ToastController,
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private aceptarServicioService:AceptarServicioService ) { }

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
    for(var i = 0 ; i < aux.length;i++){
      if(aux[i].servicio_observacion === ''){
        aux[i].servicio_observacion = 'Sin observaciones';
      }
      this.estado = aux[i].servicio_estado;
      if(aux[i].servicio_id === this.idServicio){
        j++;
        if(this.programadoDetalle.length === 0){
          this.programadoDetalle.push(aux[i]);
        }
      }
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


  aceptarServicio(id){
    //agregr cancelar todas las notificaciones
    if(this.estado === '1'){
      this.aceptarServicioService.cambiarEstadoServicio(id,'3','');
    }
    else if(this.estado === '3'){
      let now = new Date().getMilliseconds();
      let fecha = new Date(this.fecha+" "+this.hora).getMilliseconds();
      if(fecha < 3600000 && fecha < now){
        this.aceptarServicioService.cambiarEstadoServicio(id,'4','');
        this.router.navigate(['./pasajero/'+id]);
      }
      else{
        this.mostrarMensaje("Falta mas de 1 hora para el inicio del servicio");
      }
    }
    else if(this.estado === '4'){
      this.router.navigate(['./pasajero/'+id]);
    }
    
  }

  cancelarServicio(){
    let resp  = confirm("esta seguro");
  }


}
