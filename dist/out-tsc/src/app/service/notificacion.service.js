import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
let NotificacionService = class NotificacionService {
    constructor(http) {
        this.http = http;
    }
    obtenerNotificaciones() {
        let params = new HttpParams()
            .set("llave", Constantes.conductor.id);
        this.respuesta = this.http.post(Constantes.URL_BASE_NOTIFICACION + "GetNotificaciones.php", params, Constantes.httpOptions);
        console.log(this.respuesta);
        return this.respuesta;
    }
};
NotificacionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], NotificacionService);
export { NotificacionService };
//# sourceMappingURL=notificacion.service.js.map