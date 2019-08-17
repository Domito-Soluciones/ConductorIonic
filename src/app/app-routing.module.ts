import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule' },
  //{ path: 'programado', loadChildren: './page/programado/programado.module#ProgramadoPageModule' },
  //{ path: 'historico', loadChildren: './page/historico/historico.module#HistoricoPageModule' }

]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
