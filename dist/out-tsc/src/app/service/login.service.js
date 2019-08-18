import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';
import { Router } from '@angular/router';
let LoginService = class LoginService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(usuario, clave) {
        let params = new HttpParams()
            .set("usuario", usuario)
            .set("password", btoa(clave));
        this.respuesta = this.http.post(Constantes.URL_BASE_CONDUCTOR + "Login.php", params, Constantes.httpOptions);
        return this.respuesta;
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map