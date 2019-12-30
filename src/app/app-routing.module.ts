import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Build1Component } from './build1/build1.component';
import { Build2Component } from './build2/build2.component';
import { NightComponent } from  './night/night.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  { path: 'night/build1', component: Build1Component },
  { path: 'private/build2', component: Build2Component },
  { path:'night', component: NightComponent },
  { path:'private', component: PrivateComponent },
  // {path: '**', redirectTo: 'night'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
