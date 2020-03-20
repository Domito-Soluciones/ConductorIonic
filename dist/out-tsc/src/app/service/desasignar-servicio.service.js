import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let DesasignarServicioService = class DesasignarServicioService {
    constructor(http) {
        this.http = http;
    }
    desasignarServicio(idServicio) {
        let params = new HttpParams()
            .set("id", idServicio + "")
            .set("estado", "1")
            .set("observacion", "");
        this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO + "ModEstadoServicio.php", params, Constantes.httpOptions);
        console.log(this.respuesta);
        return this.respuesta;
    }
};
DesasignarServicioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DesasignarServicioService);
export { DesasignarServicioService };
//# sourceMappingURL=desasignar-servicio.service.js.map