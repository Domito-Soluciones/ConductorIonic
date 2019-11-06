import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-programadodetalle',
  templateUrl: './programadodetalle.page.html',
  styleUrls: ['./programadodetalle.page.scss'],
})
export class ProgramadodetallePage implements OnInit {

  programadoDetalle:any[];
  respuestaProgramadoDetalle:Observable<any>;

  constructor(private programadodetalleService:ProgramadodetalleService,
              private toastController: ToastController ) { }

  ngOnInit() {
  }

  
  obtenerServiciosProgramados(){
    this.respuestaProgramadoDetalle = this.programadodetalleService.obtenererviciosProgramadoDetalle();
    this.respuestaProgramadoDetalle.subscribe(data => {
      this.programadoDetalle = data;
      if(this.programadoDetalle.length === 0){
        this.mostrarMensaje("No hay servicios programados");
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


}
