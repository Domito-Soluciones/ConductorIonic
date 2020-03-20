import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProgramadoService } from '../../service/programado.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Constantes } from '../../intercace/constantes';
let ProgramadoPage = class ProgramadoPage {
    constructor(programadoService, toastController, router) {
        this.programadoService = programadoService;
        this.toastController = toastController;
        this.router = router;
        this.obtenerServiciosProgramados();
    }
    ngOnInit() {
    }
    obtenerServiciosProgramados() {
        this.respuestaProgramado = this.programadoService.obtenererviciosProgramados();
        this.respuestaProgramado.subscribe(data => {
            Constantes.programados = data;
            if (Constantes.programados.length === 0) {
                this.mostrarMensaje("No hay servicios programados");
            }
            else {
                /*var idAux = '';
                for(var i = 0; i < Constantes.programados.length;i++){
                  let id = data.servicio_id;
                  if(idAux === id){
                    Constantes.programados.splice(i, 1);
                     idAux = ''
                  }
                  else{
                    idAux = id;
                  }
                }*/
            }
        }, error => {
            console.log(error);
        });
    }
    redirect(id) {
        this.router.navigate(['./detalle/' + id]);
    }
    get programados() {
        return Constantes.programados;
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
ProgramadoPage = tslib_1.__decorate([
    Component({
        selector: 'app-programado',
        templateUrl: './programado.page.html',
        styleUrls: ['./programado.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProgramadoService,
        ToastController,
        Router])
], ProgramadoPage);
export { ProgramadoPage };
//# sourceMappingURL=programado.page.js.map