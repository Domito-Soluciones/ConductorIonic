import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let AceptarServicioService = class AceptarServicioService {
    constructor(http) {
        this.http = http;
    }
    cambiarEstadoServicio(id, estado, observacion) {
        let params = new HttpParams()
            .set("id", id)
            .set("estado", estado)
            .set("observacion", observacion);
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "ModEstadoServicio.php", params, Constantes.httpOptions);
        this.respuesta.subscribe(data => {
        }, error => {
            console.log(error);
        });
        return this.respuesta;
    }
};
AceptarServicioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AceptarServicioService);
export { AceptarServicioService };
//# sourceMappingURL=aceptar-servicio.service.js.map