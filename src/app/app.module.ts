import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimerComponent } from './timer/timer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StopwatchService } from './stopwatch.service';


import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TimerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [StopwatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
