import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PasajeroPage } from './pasajero.page';
const routes = [
    {
        path: '',
        component: PasajeroPage
    }
];
let PasajeroPageModule = class PasajeroPageModule {
};
PasajeroPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PasajeroPage]
    })
], PasajeroPageModule);
export { PasajeroPageModule };
//# sourceMappingURL=pasajero.module.js.map