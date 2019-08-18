import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let ConfiguracionPage = class ConfiguracionPage {
    constructor(toastController, storage) {
        this.toastController = toastController;
        this.storage = storage;
        this.imagen = "./assets/configuracion.png";
    }
    ngOnInit() {
    }
    seleccionarGMaps() {
        this.storage.set("nav", "google");
        this.mostrarMensaje("Navegación Google Maps seleccionada");
    }
    seleccionarWaze() {
        this.storage.set("nav", "waze");
        this.mostrarMensaje("Navegación Waze seleccionada");
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
};
ConfiguracionPage = tslib_1.__decorate([
    Component({
        selector: 'app-configuracion',
        templateUrl: './configuracion.page.html',
        styleUrls: ['./configuracion.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController,
        Storage])
], ConfiguracionPage);
export { ConfiguracionPage };
//# sourceMappingURL=configuracion.page.js.map