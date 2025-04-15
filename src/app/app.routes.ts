import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuildingsComponent} from './buildings/buildings.component';
import {ResearchComponent} from './research/research.component';
import {OptionsComponent} from './options/options.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'buildings', component: BuildingsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'options', component: OptionsComponent},
  {path: '**', redirectTo: 'dashboard'},
];
