import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    BrowserAnimationsModule
  ],
  providers: [ AxisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
