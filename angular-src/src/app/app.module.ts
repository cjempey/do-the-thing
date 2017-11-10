import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAxisComponent } from './add-axis/add-axis.component';
import { ViewAxesComponent } from './view-axes/view-axes.component';
import { AxisService } from './services/axis.service';


@NgModule({
  declarations: [
    AppComponent,
    AddAxisComponent,
    ViewAxesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ AxisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
