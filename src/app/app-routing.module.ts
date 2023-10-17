import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { OptometraComponent } from './pages/optometra/optometra.component';
import { VentasdiaComponent } from './pages/ventasdia/ventasdia.component';
import { NavarComponent } from './navar/navar.component';
import { AntecionClienteComponent } from './pages/ventasdia/antecion-cliente/antecion-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component:NavarComponent,
    children : [
      {
        path: '',
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
        component:VentasdiaComponent,
        
      },
      {
        path: 'ventasdia/:id',
        component: AntecionClienteComponent,
        
      },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , useHash:true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
