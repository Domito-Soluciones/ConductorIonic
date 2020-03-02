import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule' },
  { path: 'salir', loadChildren: './page/salir/salir.module#SalirPageModule' },
  { path: 'detalle/:id', loadChildren: './page/programadodetalle/programadodetalle.module#ProgramadodetallePageModule' },
  { path: 'pasajero/:id', loadChildren: './page/pasajero/pasajero.module#PasajeroPageModule' }


];  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
