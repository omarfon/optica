import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { OptometraComponent } from './pages/optometra/optometra.component';
import { VentasdiaComponent } from './ventasdia/ventasdia.component';
HomeComponent

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'ventas',
    component:VentasComponent
  },
  {
    path: 'optometra',
    component:OptometraComponent
  },
  {
    path: 'ventasdia',
    component:VentasdiaComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
