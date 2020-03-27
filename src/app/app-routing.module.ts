import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './app.module#AppModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule' },
  { path: 'salir', loadChildren: './page/salir/salir.module#SalirPageModule' },
  { path: 'detalle/:id', loadChildren: './page/programadodetalle/programadodetalle.module#ProgramadodetallePageModule' },
  { path: 'pasajero/:id', loadChildren: './page/pasajero/pasajero.module#PasajeroPageModule' },
  { path: 'finservicio/:id/:cliente/:fecha:/:hora/:tarifa', loadChildren: './page/finservicio/finservicio.module#FinservicioPageModule' },
  { path: 'historicodetalle/:id', loadChildren: './page/historicodetalle/historicodetalle.module#HistoricodetallePageModule' }




];  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
