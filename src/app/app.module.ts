import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ComponentModule} from "./component/component.module"
import { AppRoutingModule } from './app-routing.module';

import {CityService} from "./service/city.service"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentModule,
    HttpClientModule
  ],
  providers: [CityService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
