import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgramadodetallePage } from './programadodetalle.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramadodetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgramadodetallePage]
})
export class ProgramadodetallePageModule {}
