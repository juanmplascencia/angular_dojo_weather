import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'sanjose', pathMatch: 'full' },
  { path: 'sanjose', component: SanJoseComponentComponent },
  { path: 'seattle', component: SeattleComponentComponent },
  { path: 'burbank', component: BurbankComponentComponent },
  { path: 'dallas', component: DallasComponentComponent },
  { path: 'dc', component: WashingtonComponentComponent },
  { path: 'chicago', component: ChicagoComponentComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
