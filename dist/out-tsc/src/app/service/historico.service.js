import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let HistoricoService = class HistoricoService {
    constructor(http) {
        this.http = http;
    }
    obtenerHistorico() {
        let today = new Date();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let fechaDesde = "01/" + (mm - 2) + "/" + yyyy;
        let fechaHasta = "01/" + mm + "/" + yyyy;
        let params = new HttpParams()
            .set("desde", fechaDesde)
            .set("hasta", fechaHasta)
            .set("conductor", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "GetServiciosHistoricos.php", params, Constantes.httpOptions);
        console.log(this.respuesta);
        return this.respuesta;
    }
};
HistoricoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], HistoricoService);
export { HistoricoService };
//# sourceMappingURL=historico.service.js.map