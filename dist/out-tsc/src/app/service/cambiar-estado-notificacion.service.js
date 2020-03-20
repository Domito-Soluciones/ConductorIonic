import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let CambiarEstadoNotificacionService = class CambiarEstadoNotificacionService {
    constructor(http) {
        this.http = http;
    }
    cambiarEstadoNotificacion(id) {
        let params = new HttpParams()
            .set("id", id)
            .set("servicio", id);
        this.respuesta = this.http.post(Constantes.URL_BASE_NOTIFICACION + "ModEstadoNotificacion.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
CambiarEstadoNotificacionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], CambiarEstadoNotificacionService);
export { CambiarEstadoNotificacionService };
//# sourceMappingURL=cambiar-estado-notificacion.service.js.map