import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitylistComponent } from './citylist/citylist.component';
import { WeatherListComponent } from './weather-list/weather-list.component';


@NgModule({
  imports: [CommonModule],
  declarations: [
    CitylistComponent,
    WeatherListComponent
  ],
  exports: [
    WeatherListComponent,
    CitylistComponent
  ],
  providers: [],
})
export class ComponentModule { }
