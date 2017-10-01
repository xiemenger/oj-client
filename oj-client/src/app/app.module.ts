import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { ProblemListComponent } from './Components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './Components/problem-detail/problem-detail.component';


import { DataService } from "./services/data.service";
import { NewProblemComponent } from './Components/new-problem/new-problem.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
