import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

import { SearchModalPageModule } from "../modals/search-modal/search-modal.module";
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    InlineSVGModule,
    SearchModalPageModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule { }
