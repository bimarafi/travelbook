import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { HomePageModule } from "../home/home.module";
import { ProfilePageModule } from "../profile/profile.module";
import { TripPageModule } from "../trip/trip.module";
@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    HomePageModule,
    ProfilePageModule,
    TripPageModule,
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
