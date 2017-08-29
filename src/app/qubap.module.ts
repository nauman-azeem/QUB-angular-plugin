import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QUBAngularPluginComponent } from './qubap.component';

@NgModule({
  declarations: [
    QUBAngularPluginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [QUBAngularPluginComponent]
})
export class QUBAngularPluginModule { }
