import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController } from '@ionic/angular';
import { Constantes } from 'src/app/intercace/constantes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-programadodetalle',
  templateUrl: './programadodetalle.page.html',
  styleUrls: ['./programadodetalle.page.scss'],
})
export class ProgramadodetallePage implements OnInit {

  programadoDetalle:any[];
  respuestaProgramadoDetalle:Observable<any>;
  idServicio:any;

  constructor(private programadodetalleService:ProgramadodetalleService,
              private toastController: ToastController,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idServicio = this.activatedRoute.snapshot.paramMap.get("id")
      //this.idServicio = '10898';
      this.obtenerServiciosProgramadoDetalle();
  });
  }

  
  obtenerServiciosProgramadoDetalle(){
    let aux = Constantes.programados;
    for(var i = 0 ; i < aux.length;i++){
      if(aux[i].servicio_id === this.idServicio){
        this.programadoDetalle.push(aux[i]);
        break;
      }
    }
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


}
