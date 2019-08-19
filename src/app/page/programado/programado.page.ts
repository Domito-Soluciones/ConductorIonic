import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadoService } from '../../service/programado.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-programado',
  templateUrl: './programado.page.html',
  styleUrls: ['./programado.page.scss'],
})
export class ProgramadoPage implements OnInit {

  programados:any[];
  respuestaProgramado:Observable<any>;

  constructor(private programadoService:ProgramadoService,
    private toastController: ToastController  ) { 
      this.obtenerServiciosProgramados();
    }

  ngOnInit() {
  }

  obtenerServiciosProgramados(){
    this.respuestaProgramado = this.programadoService.obtenererviciosProgramados();
    this.respuestaProgramado.subscribe(data => {
      this.programados = data;
      if(this.programados.length === 0){
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
