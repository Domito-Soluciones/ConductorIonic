import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadoService } from '../../service/programado.service';
import { ToastController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { Constantes } from '../../intercace/constantes';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-programado',
  templateUrl: './programado.page.html',
  styleUrls: ['./programado.page.scss'],
})
export class ProgramadoPage implements OnInit {

  respuestaProgramado:Observable<any>;
  servicioActual:number;

  constructor(private programadoService:ProgramadoService,
    private toastController: ToastController,
    private router: Router ) { 
      this.obtenerServiciosProgramados();
    }

  ngOnInit() {
  }

  obtenerServiciosProgramados(){
    this.respuestaProgramado = this.programadoService.obtenererviciosProgramados();
    this.respuestaProgramado.subscribe(data => {
      Constantes.programados = data;
      alert(Constantes.programados.length);
      if(Constantes.programados.length === 0){
          this.mostrarMensaje("No hay servicios programados");
      }
      else{
        var idAux = '';
        for(var i = 0; i < Constantes.programados.length;i++){
          let id = data.servicio_id;
          if(idAux === id){
            Constantes.programados.splice(i, 1);
             idAux = ''
          }
          else{
            idAux = id;
          }
        }
      }
    }, error => {
         console.log(error);
   });
  }

  redirect(id) {
    this.router.navigate(['./detalle?id='+id]);
  }

  get programados() {
    return Constantes.programados;
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
