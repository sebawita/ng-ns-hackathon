import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Material Design Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { IntroComponent } from './intro/intro.component';
import { KeyFactsComponent } from './key-facts/key-facts.component';
import { WhyComponent } from './why/why.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { ForNgosComponent } from './for-ngos/for-ngos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ForDevsComponent } from './for-devs/for-devs.component';
import { LearningComponent } from './learning/learning.component';
import { RulesComponent } from './rules/rules.component';
import { PrizesComponent } from './prizes/prizes.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    KeyFactsComponent,
    WhyComponent,
    RegisterComponent,
    HomeComponent,
    CodeOfConductComponent,
    ForDevsComponent,
    ForNgosComponent,
    AgendaComponent,
    NavBarComponent,
    LearningComponent,
    RulesComponent,
    PrizesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material Design Components
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
