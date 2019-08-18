import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
const routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            { path: 'programado', loadChildren: '../../page/programado/programado.module#ProgramadoPageModule' },
            { path: 'historico', loadChildren: '../../page/historico/historico.module#HistoricoPageModule' },
            { path: 'produccion', loadChildren: '../../page/produccion/produccion.module#ProduccionPageModule' },
            { path: 'configuracion', loadChildren: '../../page/configuracion/configuracion.module#ConfiguracionPageModule' }
        ]
    },
    {
        path: '',
        redirectTo: './programado'
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MenuPage]
    })
], MenuPageModule);
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map