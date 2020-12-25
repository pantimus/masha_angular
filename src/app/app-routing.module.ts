import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherListComponent } from './component/weather-list/weather-list.component';
import { CitylistComponent } from './component/citylist/citylist.component';

const routes: Routes = [
  { path: '', redirectTo: '/citylist', pathMatch: 'full' },
  { path: 'citylist', component: CitylistComponent },
  { path: 'city/:id', component: WeatherListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
