import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';


const routes: Routes = [
  { path: 'WeekOne', component: WeekOneComponent },
  { path: 'WeekTwo', component: WeekTwoComponent}
];
const displayRoutes = [
  { weekNum: 1, name: 'Week One', path: 'WeekOne' },
  { weekNum: 2, name: 'Week Two', path: 'WeekTwo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes = routes;
    displayRoutes = displayRoutes;
 }
