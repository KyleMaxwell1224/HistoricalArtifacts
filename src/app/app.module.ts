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
import { WeekThreeComponent } from './weeklyartifacts/week-three/week-three.component';
import { WeekFourComponent } from './weeklyartifacts/week-four/week-four.component';
import { WeekFiveComponent } from './weeklyartifacts/week-five/week-five.component';
import { WeekSixComponent } from './weeklyartifacts/week-six/week-six.component';
import { WeekSevenComponent } from './weeklyartifacts/week-seven/week-seven.component';
import { WeekEightComponent } from './weeklyartifacts/week-eight/week-eight.component';
import { WeekNineComponent } from './weeklyartifacts/week-nine/week-nine.component';
import { WeekTenComponent } from './weeklyartifacts/week-ten/week-ten.component';
import { WeekElevenComponent } from './weeklyartifacts/week-eleven/week-eleven.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeekOneComponent,
    TableOfContentsComponent,
    WeekTwoComponent,
    WeekThreeComponent,
    WeekFourComponent,
    WeekFiveComponent,
    WeekSixComponent,
    WeekSevenComponent,
    WeekEightComponent,
    WeekNineComponent,
    WeekTenComponent,
    WeekElevenComponent
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
