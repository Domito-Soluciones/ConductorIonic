import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', loadChildren: './page/login/login.module#LoginPageModule' },
    { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
    { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule' },
    { path: 'salir', loadChildren: './page/salir/salir.module#SalirPageModule' },
    { path: 'detalle/:id', loadChildren: './page/programadodetalle/programadodetalle.module#ProgramadodetallePageModule' },
    { path: 'pasajero/:id', loadChildren: './page/pasajero/pasajero.module#PasajeroPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map