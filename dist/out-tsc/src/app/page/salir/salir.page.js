import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let SalirPage = class SalirPage {
    constructor(router) {
        this.router = router;
        this.salir();
    }
    ngOnInit() {
    }
    salir() {
        this.router.navigateByUrl("login");
    }
};
SalirPage = tslib_1.__decorate([
    Component({
        selector: 'app-salir',
        templateUrl: './salir.page.html',
        styleUrls: ['./salir.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], SalirPage);
export { SalirPage };
//# sourceMappingURL=salir.page.js.map