import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountComponent } from './components/count/count.component';
import { TestComponent } from './components/test/test.component';
import { StepComponent } from './components/step/step.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DataService } from './services/data.service';
import { SpendsComponent } from './components/spends/spends.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountComponent,
    TestComponent,
    StepComponent,
    QuotesComponent,
    SpendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
