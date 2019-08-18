import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProgramadoPage } from './programado.page';
const routes = [
    {
        path: '',
        component: ProgramadoPage
    }
];
let ProgramadoPageModule = class ProgramadoPageModule {
};
ProgramadoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProgramadoPage]
    })
], ProgramadoPageModule);
export { ProgramadoPageModule };
//# sourceMappingURL=programado.module.js.map