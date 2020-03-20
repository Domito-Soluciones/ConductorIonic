import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let ProgramadoService = class ProgramadoService {
    constructor(http) {
        this.http = http;
    }
    obtenererviciosProgramados() {
        let params = new HttpParams()
            .set("conductor", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "GetServiciosProgramados.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
ProgramadoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProgramadoService);
export { ProgramadoService };
//# sourceMappingURL=programado.service.js.map