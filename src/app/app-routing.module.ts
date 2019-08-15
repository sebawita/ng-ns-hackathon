import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LearningComponent } from './learning/learning.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { RegisterComponent } from './register/register.component';
// import { PrizesComponent } from './prizes/prizes.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(mod => mod.AgendaModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then(mod => mod.LearningModule)
  },
  {
    path: 'prizes',
    loadChildren: () => import('./prizes/prizes.module').then(mod => mod.PrizesModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then(mod => mod.RulesModule)
  },
  {
    path: 'code-of-conduct',
    loadChildren: () => import('./code-of-conduct/code-of-conduct.module').then(mod => mod.CodeOfConductModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
