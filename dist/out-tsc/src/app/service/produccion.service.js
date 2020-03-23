import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let ProduccionService = class ProduccionService {
    constructor(http) {
        this.http = http;
    }
    obtenerProduccion() {
        let today = new Date();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let fechaDesde = "01/" + mm + "/" + yyyy;
        let fechaHasta = "01/" + (mm + 1) + "/" + yyyy;
        let params = new HttpParams()
            .set("desde", fechaDesde)
            .set("hdesde", "00:00:00")
            .set("hasta", fechaHasta)
            .set("hhasta", "00:00:00")
            .set("estado", "5")
            .set("conductor", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_LIQUIDACION + "GetProduccion.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
ProduccionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProduccionService);
export { ProduccionService };
//# sourceMappingURL=produccion.service.js.map