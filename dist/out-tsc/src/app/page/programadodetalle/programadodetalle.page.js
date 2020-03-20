import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProgramadodetalleService } from '../../service/programadodetalle.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Constantes } from 'src/app/intercace/constantes';
import { ActivatedRoute, Router } from '@angular/router';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service';
import { DesasignarServicioService } from 'src/app/service/desasignar-servicio.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
let ProgramadodetallePage = class ProgramadodetallePage {
    constructor(programadodetalleService, toastController, activatedRoute, router, aceptarServicioService, desasignarServicioService, alertCtrl, callNumber) {
        this.programadodetalleService = programadodetalleService;
        this.toastController = toastController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.aceptarServicioService = aceptarServicioService;
        this.desasignarServicioService = desasignarServicioService;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.programadoDetalle = [];
        this.pasajeros = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.idServicio = this.activatedRoute.snapshot.paramMap.get("id");
            this.obtenerServiciosProgramadoDetalle();
        });
    }
    obtenerServiciosProgramadoDetalle() {
        let aux = Constantes.programados;
        this.programados = aux;
        let j = 0;
        for (var i = 0; i < aux.length; i++) {
            let pjro = { "pasajero_nombre": aux[i].servicio_pasajero_nombre,
                "pasajero_celular": aux[i].servicio_pasajero_celular,
                "pasajero_destino": aux[i].servicio_destino };
            this.pasajeros.push(pjro);
            if (aux[i].servicio_observacion === '') {
                aux[i].servicio_observacion = 'Sin observaciones';
            }
            this.estado = aux[i].servicio_estado;
            let arreglo = aux[i].servicio_fecha.split("-");
            this.fechaServicio = arreglo[2] + "-" + arreglo[1] + "-" + arreglo[0];
            this.horaServicio = aux[i].servicio_hora;
            if (aux[i].servicio_id === this.idServicio) {
                j++;
                if (this.programadoDetalle.length === 0) {
                    this.programadoDetalle.push(aux[i]);
                }
            }
        }
        this.cantidad = j;
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
    aceptarServicio() {
        //agregr cancelar todas las notificaciones
        if (this.estado === '1') {
            this.aceptarServicioService.cambiarEstadoServicio(this.idServicio, '3', '');
            this.router.navigate(['./menu/programado/']);
        }
        else if (this.estado === '3') {
            let now = Math.round(new Date().getTime() / 1000);
            let fecha = new Date(this.fechaServicio + " " + this.horaServicio).getTime() / 1000;
            if ((fecha - now) <= 36000 && now < fecha) {
                this.aceptarServicioService.cambiarEstadoServicio(this.idServicio, '4', '');
                this.router.navigate(['./pasajero/' + this.idServicio]);
            }
            else {
                this.mostrarMensaje("Falta mas de 1 hora para el inicio del servicio");
            }
        }
        else if (this.estado === '4') {
            this.router.navigate(['./pasajero/' + this.idServicio]);
        }
    }
    cancelarServicio() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '¿Esta seguro que desea rechazar este servicio?',
                buttons: [
                    {
                        text: 'No',
                        role: 'No',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.desasignarServicioService.desasignarServicio(this.idServicio);
                            this.router.navigate(['./menu/programado']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    continuarServicio() {
    }
    llamar(numero) {
        this.callNumber.callNumber(numero, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    volver() {
        this.router.navigate(['./menu/programado']);
    }
};
tslib_1.__decorate([
    ViewChild("fecha", { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], ProgramadodetallePage.prototype, "fecha", void 0);
tslib_1.__decorate([
    ViewChild("hora", { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], ProgramadodetallePage.prototype, "hora", void 0);
ProgramadodetallePage = tslib_1.__decorate([
    Component({
        selector: 'app-programadodetalle',
        templateUrl: './programadodetalle.page.html',
        styleUrls: ['./programadodetalle.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ProgramadodetalleService,
        ToastController,
        ActivatedRoute,
        Router,
        AceptarServicioService,
        DesasignarServicioService,
        AlertController,
        CallNumber])
], ProgramadodetallePage);
export { ProgramadodetallePage };
//# sourceMappingURL=programadodetalle.page.js.map