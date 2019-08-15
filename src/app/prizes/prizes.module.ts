import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PrizesComponent } from './prizes.component';

const routes: Routes = [{ path: '', component: PrizesComponent }];

@NgModule({
  declarations: [
    PrizesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PrizesModule { }
