import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { LearningComponent } from './learning.component';

const routes: Routes = [{ path: '', component: LearningComponent }];

@NgModule({
  declarations: [
    LearningComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
  ]
})
export class LearningModule { }
