import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { LoginComponent } from './components/login/login.component';
import { SelectorComponent } from './components/overview/selector/selector.component';
import { MainOverviewComponent } from './components/overview/main-overview/main-overview.component';
import { CitiesCardComponent } from './components/overview/cities-card/cities-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyFooterComponent,
    LoginComponent,
    SelectorComponent,
    MainOverviewComponent,
    CitiesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
