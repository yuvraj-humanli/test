import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountComponent } from './components/count/count.component';
import { TestComponent } from './components/test/test.component';
import { StepComponent } from './components/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountComponent,
    TestComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
