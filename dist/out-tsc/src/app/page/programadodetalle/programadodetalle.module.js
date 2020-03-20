import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProgramadodetallePage } from './programadodetalle.page';
const routes = [
    {
        path: '',
        component: ProgramadodetallePage
    }
];
let ProgramadodetallePageModule = class ProgramadodetallePageModule {
};
ProgramadodetallePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProgramadodetallePage]
    })
], ProgramadodetallePageModule);
export { ProgramadodetallePageModule };
//# sourceMappingURL=programadodetalle.module.js.map