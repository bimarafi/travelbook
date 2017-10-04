import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InlineSVGModule } from "ng-inline-svg";
import { HomePage } from './home';
import { SearchPage } from '../search/search';

@NgModule({
  declarations: [
    HomePage,
    SearchPage,
  ],
  entryComponents: [
    SearchPage,
  ],
  imports: [
    InlineSVGModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
