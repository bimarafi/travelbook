import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    InlineSVGModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}
