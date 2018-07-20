import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {DataPieComponent} from './data.pie.component';
import {DataHeaderComponent} from './html/header.component';

const COMPONENTS = [
  DataPieComponent,
  DataHeaderComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  entryComponents:[
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PropertyDataModule {
}