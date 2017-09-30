import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { ProblemListComponent } from './Components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './Components/problem-detail/problem-detail.component';


import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
