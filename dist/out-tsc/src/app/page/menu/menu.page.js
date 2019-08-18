import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.pages = [
            {
                title: 'Programados',
                url: '/menu/programado',
                img: './assets/calendario.png'
            },
            {
                title: 'Historico',
                url: '/menu/historico',
                img: './assets/historial.png'
            },
            {
                title: 'Producción',
                url: '/menu/produccion',
                img: './assets/produccion.png'
            },
            {
                title: 'Configuración',
                url: '/menu/configuracion',
                img: './assets/configuracion.png'
            },
            {
                title: 'Cerrar Sesión',
                url: '/menu/salir',
                img: './assets/logout.png'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
            console.log(this.selectedPath);
        });
    }
    ;
    ngOnInit() {
    }
};
MenuPage = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.page.html',
        styleUrls: ['./menu.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], MenuPage);
export { MenuPage };
//# sourceMappingURL=menu.page.js.map