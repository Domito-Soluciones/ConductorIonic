import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SalirPage } from './salir.page';
const routes = [
    {
        path: '',
        component: SalirPage
    }
];
let SalirPageModule = class SalirPageModule {
};
SalirPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SalirPage]
    })
], SalirPageModule);
export { SalirPageModule };
//# sourceMappingURL=salir.module.js.map