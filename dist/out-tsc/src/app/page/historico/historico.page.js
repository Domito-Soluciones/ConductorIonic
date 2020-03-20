import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HistoricoService } from '../../service/historico.service';
import { ToastController } from '@ionic/angular';
let HistoricoPage = class HistoricoPage {
    constructor(historicoService, toastController) {
        this.historicoService = historicoService;
        this.toastController = toastController;
        this.imagen = "./assets/historial.png";
        this.obtenerHistorico();
    }
    ngOnInit() {
    }
    obtenerHistorico() {
        this.respuestaHistorico = this.historicoService.obtenerHistorico();
        this.respuestaHistorico.subscribe(data => {
            this.historico = data;
            if (this.historico.length === 0) {
                this.mostrarMensaje("No hay historial registrado");
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
HistoricoPage = tslib_1.__decorate([
    Component({
        selector: 'app-historico',
        templateUrl: './historico.page.html',
        styleUrls: ['./historico.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HistoricoService,
        ToastController])
], HistoricoPage);
export { HistoricoPage };
//# sourceMappingURL=historico.page.js.map