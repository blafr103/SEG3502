import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListElementComponent } from './shopping-list/shopping-list-element/shopping-list-element.component';
import { ShoppingViewComponent } from './shopping-list/shopping-view/shopping-view.component';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListElementComponent,
    ShoppingViewComponent
 
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        CommonModule
        
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
