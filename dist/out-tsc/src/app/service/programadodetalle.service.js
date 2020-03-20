import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let ProgramadodetalleService = class ProgramadodetalleService {
    constructor(http) {
        this.http = http;
    }
    obtenerServiciosProgramadoDetalle() {
        let params = new HttpParams()
            .set("conductor", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "GetServiciosProgramados.php", params, Constantes.httpOptions);
        this.respuesta.subscribe(data => {
        }, error => {
            console.log(error);
        });
        return this.respuesta;
    }
};
ProgramadodetalleService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProgramadodetalleService);
export { ProgramadodetalleService };
//# sourceMappingURL=programadodetalle.service.js.map