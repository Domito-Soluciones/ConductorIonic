import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  imagen = "./assets/configuracion.png";

  constructor(private toastController: ToastController,
    private storage: Storage) {}

  ngOnInit() {
  }

  seleccionarGMaps() {
    this.storage.set("nav","google");
    this.mostrarMensaje("Navegación Google Maps seleccionada");
  }  
  seleccionarWaze() {
    this.storage.set("nav","waze");
    this.mostrarMensaje("Navegación Waze seleccionada");
  }
  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
