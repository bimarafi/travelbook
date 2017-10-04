import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InlineSVGModule } from "ng-inline-svg";
import { HomePage } from './home';
import { SearchPageModule } from '../search/search.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    InlineSVGModule,
    SearchPageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
