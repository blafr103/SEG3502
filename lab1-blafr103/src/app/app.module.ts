import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
