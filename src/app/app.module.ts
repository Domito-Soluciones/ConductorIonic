import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';  
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { IonicStorageModule  } from '@ionic/storage';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    BackgroundMode ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {} 
 