import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let ServiciosProgramadosService = class ServiciosProgramadosService {
    constructor(http) {
        this.http = http;
    }
    getServiciosProgramados() {
        let params = new HttpParams()
            .set("conductor", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "ModEstadoMovil.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
ServiciosProgramadosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ServiciosProgramadosService);
export { ServiciosProgramadosService };
//# sourceMappingURL=servicio-programado.service.js.map