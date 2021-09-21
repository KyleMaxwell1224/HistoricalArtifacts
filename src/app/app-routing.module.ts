import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { WeekThreeComponent } from './weeklyartifacts/week-three/week-three.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';


const routes: Routes = [
  { path: 'WeekOne', component: WeekOneComponent },
  { path: 'WeekTwo', component: WeekTwoComponent},
  { path: 'WeekThree', component: WeekThreeComponent}
];
const displayRoutes = [
  { weekNum: 1, name: 'Week One', path: 'WeekOne' },
  { weekNum: 2, name: 'Week Two', path: 'WeekTwo'},
  { weekNum: 3, name: 'Week Three', path: 'WeekThree'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes = routes;
    displayRoutes = displayRoutes;
 }
