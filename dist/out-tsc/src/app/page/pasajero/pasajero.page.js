import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constantes } from 'src/app/intercace/constantes';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/';
let PasajeroPage = class PasajeroPage {
    constructor(activatedRoute, router, callNumber, launchNavigator) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.servicio = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.idServicio = this.activatedRoute.snapshot.paramMap.get("id");
            this.cargarPasajeros();
        });
    }
    cargarPasajeros() {
        for (let i = 0; i < Constantes.programados.length; i++) {
            let aux = Constantes.programados[i];
            if (aux.servicio_id === this.idServicio) {
                this.servicio.push(aux);
            }
        }
    }
    volver() {
        this.router.navigate(['./menu/programado']);
    }
    llamar(numero) {
        this.callNumber.callNumber(numero, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    navegar(destino) {
        let options = {
            start: 'London, ON'
                //app: LaunchNavigator.APP.GOOGLE_MAPS 
        };
        this.launchNavigator.navigate(destino, options)
            .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
    }
};
PasajeroPage = tslib_1.__decorate([
    Component({
        selector: 'app-pasajero',
        templateUrl: './pasajero.page.html',
        styleUrls: ['./pasajero.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        CallNumber,
        LaunchNavigator
    ])
], PasajeroPage);
export { PasajeroPage };
//# sourceMappingURL=pasajero.page.js.map