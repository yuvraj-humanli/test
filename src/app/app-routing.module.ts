import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { TestComponent } from './components/test/test.component';
import { SpendsComponent } from './components/spends/spends.component';

const routes: Routes = [
  { path: "", component: TestComponent},
  { path: "quote", component: QuotesComponent},
  {path:"spends",component:SpendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
