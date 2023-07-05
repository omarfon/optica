import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';



@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, VentasComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
            AppRoutingModule,FormsModule, 
            HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
