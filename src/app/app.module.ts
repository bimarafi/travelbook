import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InlineSVGModule } from "ng-inline-svg";

import { MyApp } from './app.component';
import { CaraPemesananPage } from '../pages/cara-pemesanan/cara-pemesanan';
import { HomePage } from "../pages/home/home";
import { HubungiKamiPage } from "../pages/hubungi-kami/hubungi-kami";
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { PengaturanPage } from "../pages/pengaturan/pengaturan";
import { PoinSayaPage } from "../pages/poin-saya/poin-saya";
import { ProfilePage } from "../pages/profile/profile";
import { PromoBerlangsungPage } from "../pages/promo-berlangsung/promo-berlangsung";
import { TentangKamiPage } from "../pages/tentang-kami/tentang-kami";
import { TripPage } from "../pages/trip/trip"; 

import { SearchPage } from "../pages/search/search";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let pages:Array<any> = [
    MyApp,
    CaraPemesananPage,
    HomePage,
    HubungiKamiPage,
    LoginPage,
    MainPage,
    PengaturanPage,
    ProfilePage,
    PoinSayaPage,
    PromoBerlangsungPage,
    TentangKamiPage,
    TripPage,

    SearchPage
  ];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    InlineSVGModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
