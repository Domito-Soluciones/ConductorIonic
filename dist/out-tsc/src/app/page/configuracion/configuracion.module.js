import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionPage } from './configuracion.page';
const routes = [
    {
        path: '',
        component: ConfiguracionPage
    }
];
let ConfiguracionPageModule = class ConfiguracionPageModule {
};
ConfiguracionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ConfiguracionPage]
    })
], ConfiguracionPageModule);
export { ConfiguracionPageModule };
//# sourceMappingURL=configuracion.module.js.map