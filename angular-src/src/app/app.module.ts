import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

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
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AddAxisComponent } from './add-axis/add-axis.component';
import { ViewAxesComponent } from './view-axes/view-axes.component';
import { AxisService } from './services/axis.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AxisCardComponent } from './axis-card/axis-card.component';


const appRoutes: Routes = [
 { path: 'axes', component: ViewAxesComponent },
 { path: ''    , component: DashboardComponent },
 { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddAxisComponent,
    ViewAxesComponent,
    DashboardComponent,
    AxisCardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debug
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,

    BrowserAnimationsModule
  ],
  providers: [ AxisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
