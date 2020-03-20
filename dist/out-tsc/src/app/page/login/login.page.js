import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { BackGroundService } from '../../service/back-ground.service';
import { ModEstadoMovilService } from '../../service/mod-estado-movil.service';
import { ToastController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Constantes } from '../../intercace/constantes';
import { Storage } from '@ionic/storage';
let LoginPage = class LoginPage {
    constructor(loginService, modEstadoMovil, router, toastController, uniqueDeviceID, backGroundService, storage) {
        this.loginService = loginService;
        this.modEstadoMovil = modEstadoMovil;
        this.router = router;
        this.toastController = toastController;
        this.uniqueDeviceID = uniqueDeviceID;
        this.backGroundService = backGroundService;
        this.storage = storage;
    }
    ngOnInit() {
        this.uniqueDeviceID.get()
            .then((uuid) => Constantes.uniqueId = uuid)
            .catch((error) => console.log(">" + error));
    }
    login(usuario, clave) {
        if (usuario === '' || clave == '') {
            this.mostrarMensaje("Ingrese todos los campos necesarios");
        }
        else {
            this.respuestaLogin = this.loginService.login(usuario, clave);
            this.respuestaLogin.subscribe(data => {
                let id = data.conductor_id;
                let nombre = data.conductor_nombre;
                let dispositivo = data.conductor_equipo;
                if (id !== 0) {
                    if (dispositivo !== "" && dispositivo !== Constantes.uniqueId) {
                        this.mostrarMensaje("Usuario activo en otro dispositivo");
                    }
                    else {
                        this.backGroundService.iniciar();
                        Constantes.conductor.id = id;
                        Constantes.conductor.activo = true;
                        Constantes.conductor.nick = usuario;
                        //this.modificarEstadoMovil();
                        this.storage.set("idUsuario", id);
                        this.storage.set("nickUsuario", usuario);
                        this.storage.set("claveUsuario", clave);
                        this.storage.set("nombreUsuario", nombre);
                        if (Constantes.conductor.recordarSession) {
                            this.storage.set("recordar", "1");
                        }
                        else {
                            this.storage.set("recordar", "0");
                        }
                        this.router.navigateByUrl("menu/programado");
                    }
                }
                else {
                    this.mostrarMensaje("Usuario y/o contraseña incorrecto");
                }
            }, error => {
                console.log(error);
            });
        }
    }
    mostrarMensaje(mensaje) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: 2000
            });
            toast.present();
        });
    }
    modificarEstadoMovil() {
        this.respuestaModMovil = this.modEstadoMovil.modificarEstadoMovil("1");
        this.respuestaModMovil.subscribe(data => {
        }, error => {
            console.log(error);
        });
    }
    validarRecordar(checked) {
        if (checked) {
            Constantes.conductor.recordarSession = true;
        }
        else {
            Constantes.conductor.recordarSession = false;
        }
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LoginService,
        ModEstadoMovilService,
        Router,
        ToastController,
        UniqueDeviceID,
        BackGroundService,
        Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map