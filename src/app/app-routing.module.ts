import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';


const routes: Routes = [
  { path: 'WeekOne', component: WeekOneComponent }
];
const displayRoutes = [
  { weekNum: 1, name: 'Week One', path: 'WeekOne' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes = routes;
    displayRoutes = displayRoutes;
 }
