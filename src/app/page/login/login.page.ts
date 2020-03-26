import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { BackGroundService } from '../../service/back-ground.service';
import { ModEstadoMovilService } from '../../service/mod-estado-movil.service';
import { ToastController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Constantes } from '../../intercace/constantes';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  respuestaLogin:Observable<any>;
  respuestaModMovil:Observable<any>;
  recordar:boolean = false;

  constructor(
    private loginService:LoginService,
    private modEstadoMovil:ModEstadoMovilService,
    private router: Router,
    private toastController: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    private backGroundService: BackGroundService,
    private storage: Storage
    ){
      
  }

  ngOnInit(){ 
    this.uniqueDeviceID.get()
    .then((uuid: any) =>Constantes.uniqueId = uuid)
    .catch((error: any) => console.log(">"+error));
    this.storage.get('recordar').then((result) => {
      if(result === "1"){
        this.recordar = true;
        if(!this.backGroundService.isActivo()){
          this.backGroundService.iniciar();
          this.router.navigateByUrl("menu/programado");
        }
      }
    });
    
  }

  login(usuario:string, clave:string){
    if(usuario === '' || clave == ''){
      this.mostrarMensaje("Ingrese todos los campos necesarios");
    }
    else{ 
      this.respuestaLogin = this.loginService.login(usuario,clave);
      this.respuestaLogin.subscribe(data => {
          let id = data.conductor_id;
          let nombre = data.conductor_nombre;
          let dispositivo = data.conductor_equipo;
          if (id !== 0) {

            if(dispositivo !== "" && dispositivo !== Constantes.uniqueId){
              this.mostrarMensaje("Usuario activo en otro dispositivo");
            }
            else{
              this.backGroundService.iniciar();
              Constantes.conductor.id = id;
              Constantes.conductor.activo = true;
              Constantes.conductor.nick = usuario;
              //this.modificarEstadoMovil();
              this.storage.set("idUsuario", id);
              this.storage.set("nickUsuario",usuario);
              this.storage.set("claveUsuario", clave);
              this.storage.set("nombreUsuario",nombre);
              if (Constantes.conductor.recordarSession) {
                this.storage.set("recordar","1");
              } else {
                this.storage.set("recordar","0");
              }

              this.router.navigateByUrl("menu/programado");
            } 
          }
          else{
            this.mostrarMensaje("Usuario y/o contraseña incorrecto");
          }
       }, error => {
         console.log(error);
       });
    }
  }

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  modificarEstadoMovil(){
    this.respuestaModMovil = this.modEstadoMovil.modificarEstadoMovil("1");
    this.respuestaModMovil.subscribe(data => {

    }, error => {
     console.log(error);
   });
  }

  validarRecordar(checked:boolean){
    if(checked){
      Constantes.conductor.recordarSession = true;
    }
    else{
      Constantes.conductor.recordarSession = false;
    }
  }

}
