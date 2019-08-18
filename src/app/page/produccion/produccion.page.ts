import { Component, OnInit } from '@angular/core';
import { ProduccionService } from '../../service/produccion.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.page.html',
  styleUrls: ['./produccion.page.scss'],
})
export class ProduccionPage implements OnInit {
  
  imagen = "./assets/produccion.png";
  total = 0;
  respuestaProduccion:Observable<any>;
  produccion:any[];
    

  constructor(private produccionService:ProduccionService,
              private toastController: ToastController  ) { 
                this.obtenerProduccion();
              }

  ngOnInit() {
  }

  obtenerProduccion(){
    this.respuestaProduccion = this.produccionService.obtenerProduccion();
    this.respuestaProduccion.subscribe(data => {
      this.produccion = data;
      if(this.produccion.length === 0){
        this.mostrarMensaje("No hay producción registrada");
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
