import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultPage } from './search-result';
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    SearchResultPage,
  ],
  imports: [
    InlineSVGModule,
    IonicPageModule.forChild(SearchResultPage),
  ],
})
export class SearchResultPageModule {}
