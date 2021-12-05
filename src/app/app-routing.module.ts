import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { WeekEightComponent } from './weeklyartifacts/week-eight/week-eight.component';
import { WeekElevenComponent } from './weeklyartifacts/week-eleven/week-eleven.component';
import { WeekFiveComponent } from './weeklyartifacts/week-five/week-five.component';
import { WeekFourComponent } from './weeklyartifacts/week-four/week-four.component';
import { WeekNineComponent } from './weeklyartifacts/week-nine/week-nine.component';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { WeekSevenComponent } from './weeklyartifacts/week-seven/week-seven.component';
import { WeekSixComponent } from './weeklyartifacts/week-six/week-six.component';
import { WeekTenComponent } from './weeklyartifacts/week-ten/week-ten.component';
import { WeekThreeComponent } from './weeklyartifacts/week-three/week-three.component';
import { WeekTwelveComponent } from './weeklyartifacts/week-twelve/week-twelve.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';


const routes: Routes = [
  { path: 'WeekOne', component: WeekOneComponent },
  { path: 'WeekTwo', component: WeekTwoComponent},
  { path: 'WeekThree', component: WeekThreeComponent},
  { path: 'WeekFour', component: WeekFourComponent},
  { path: 'WeekFive', component: WeekFiveComponent},
  { path: 'WeekSix', component: WeekSixComponent},
  { path: 'WeekSeven', component: WeekSevenComponent},
  { path: 'WeekEight', component: WeekEightComponent},
  { path: 'WeekNine', component: WeekNineComponent},
  { path: 'WeekTen', component: WeekTenComponent},
  { path: 'WeekEleven', component: WeekElevenComponent},
  { path: 'WeekTwelve', component: WeekTwelveComponent},
  { path: '', component: TableOfContentsComponent, pathMatch: 'full' },
];
const displayRoutes = [
  { weekNum: 1, name: 'Week One', path: 'WeekOne' },
  { weekNum: 2, name: 'Week Two', path: 'WeekTwo'},
  { weekNum: 3, name: 'Week Three', path: 'WeekThree'},
  { weekNum: 4, name: 'Week Four', path: 'WeekFour'},
  { weekNum: 5, name: 'Week Five', path: 'WeekFive'},
  { weekNum: 6, name: 'Week Six', path: 'WeekSix'},
  { weekNum: 7, name: 'Week Seven', path: 'WeekSeven'},
  { weekNum: 8, name: 'Week Eight', path: 'WeekEight'},
  { weekNum: 9, name: 'Week Nine', path: 'WeekNine'},
  { weekNum: 10, name: 'Week Ten', path: 'WeekTen'},
  { weekNum: 11, name: 'Week Eleven', path: 'WeekEleven'},
  { weekNum: 12, name: 'Week Twelve', path: 'WeekTwelve'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes = routes;
    displayRoutes = displayRoutes;
 }
