import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProduccionService } from '../../service/produccion.service';
import { ToastController } from '@ionic/angular';
let ProduccionPage = class ProduccionPage {
    constructor(produccionService, toastController) {
        this.produccionService = produccionService;
        this.toastController = toastController;
        this.imagen = "./assets/produccion.png";
        this.total = 0;
        this.obtenerProduccion();
    }
    ngOnInit() {
    }
    obtenerProduccion() {
        this.respuestaProduccion = this.produccionService.obtenerProduccion();
        this.respuestaProduccion.subscribe(data => {
            this.produccion = data;
            if (this.produccion.length === 0) {
                this.mostrarMensaje("No hay producción registrada");
            }
        }, error => {
            console.log(error);
        });
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
ProduccionPage = tslib_1.__decorate([
    Component({
        selector: 'app-produccion',
        templateUrl: './produccion.page.html',
        styleUrls: ['./produccion.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProduccionService,
        ToastController])
], ProduccionPage);
export { ProduccionPage };
//# sourceMappingURL=produccion.page.js.map