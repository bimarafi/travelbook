import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

import { SearchModalPageModule } from "../modals/search-modal/search-modal.module";
import { SearchResultPageModule } from "../search-result/search-result.module";
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    InlineSVGModule,
    SearchModalPageModule,
    SearchResultPageModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule { }
