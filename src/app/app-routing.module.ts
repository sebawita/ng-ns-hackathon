import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LearningComponent } from './learning/learning.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { RegisterComponent } from './register/register.component';
import { PrizesComponent } from './prizes/prizes.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'prizes', component: PrizesComponent },
  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
