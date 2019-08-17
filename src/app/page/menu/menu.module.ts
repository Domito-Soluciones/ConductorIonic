import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'programado', loadChildren: './page/programado/programado.module#ProgramadoPageModule' },
      { path: 'historico', loadChildren: './page/historico/historico.module#HistoricoPageModule' },
      { path: 'produccion', loadChildren: './page/produccion/produccion.module#ProduccionPageModule' },
      { path: 'configuracion', loadChildren: './page/configuracion/configuracion.module#ConfiguracionPageModule' }


    ]
  },
  { 
    path: '',
    redirectTo: './programado'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
