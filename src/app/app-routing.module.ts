import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomArtifactComponent } from './random-artifact/random-artifact.component';
import { WeekOneComponent } from './weeklyartifacts/week-one/week-one.component';
import { WeekTwoComponent } from './weeklyartifacts/week-two/week-two.component';


const routes: Routes = [
  { path: 'RandomArtifact', component: RandomArtifactComponent},
  { path: 'WeekOne', component: WeekOneComponent },
  { path: 'WeekTwo', component: WeekTwoComponent}
];
const displayRoutes = [
  { weekNum: 0, name: 'Random Artifact', path: 'RandomArtifact'},
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
