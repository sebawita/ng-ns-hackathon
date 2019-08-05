import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { KeyFactsComponent } from './key-facts/key-facts.component';
import { WhyComponent } from './why/why.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { ForNgosComponent } from './for-ngos/for-ngos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ForDevsComponent } from './for-devs/for-devs.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
