import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProduccionPage } from './produccion.page';
const routes = [
    {
        path: '',
        component: ProduccionPage
    }
];
let ProduccionPageModule = class ProduccionPageModule {
};
ProduccionPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProduccionPage]
    })
], ProduccionPageModule);
export { ProduccionPageModule };
//# sourceMappingURL=produccion.module.js.map