import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekFiveComponent } from './weeklyartifacts/week-five/week-five.component';
import { WeekFourComponent } from './weeklyartifacts/week-four/week-four.component';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { WeekThreeComponent } from './weeklyartifacts/week-three/week-three.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';


const routes: Routes = [
  { path: 'WeekOne', component: WeekOneComponent },
  { path: 'WeekTwo', component: WeekTwoComponent},
  { path: 'WeekThree', component: WeekThreeComponent},
  //{ path: 'WeekFour', component: WeekFourComponent},
  { path: 'WeekFive', component: WeekFiveComponent}
];
const displayRoutes = [
  { weekNum: 1, name: 'Week One', path: 'WeekOne' },
  { weekNum: 2, name: 'Week Two', path: 'WeekTwo'},
  { weekNum: 3, name: 'Week Three', path: 'WeekThree'},
  //{ weekNum: 4, name: 'Week Four', path: 'WeekFour'},
  { weekNum: 5, name: 'Week Five', path: 'WeekFive'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes = routes;
    displayRoutes = displayRoutes;
 }
