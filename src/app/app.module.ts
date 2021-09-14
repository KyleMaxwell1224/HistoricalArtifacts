import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeekOneComponent,
    TableOfContentsComponent,
    WeekTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
