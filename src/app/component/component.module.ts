import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { CitylistComponent } from './citylist/citylist.component';
import { WeatherListComponent } from './weather-list/weather-list.component';


@NgModule({
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons)],
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
