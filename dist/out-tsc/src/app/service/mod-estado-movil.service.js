import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let ModEstadoMovilService = class ModEstadoMovilService {
    constructor(http) {
        this.http = http;
    }
    modificarEstadoMovil(estado) {
        let params = new HttpParams()
            .set("conductor", Constantes.conductor.id)
            .set("estado", estado)
            .set("equipo", Constantes.uniqueId);
        this.respuesta = this.http.post(Constantes.URL_BASE_MOVIL + "ModEstadoMovil.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
ModEstadoMovilService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ModEstadoMovilService);
export { ModEstadoMovilService };
//# sourceMappingURL=mod-estado-movil.service.js.map