import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather/weather.service';
import { City } from '../../models/city.model';
import { CityService } from '../../service/city/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {
  selectedCity: string;
  cites: City[];
  constructor(private cityService: CityService, private weatherService: WeatherService, private router: Router) { };

  ngOnInit(): void {
    this.getCites();
  }
  ngOnChanges(): void {
    
  }
  onSelect(city: City): void {
    this.router.navigate(['/city', city.name])
  }
  getCites(): void {
    this.cityService.getCites() 
      .subscribe(cites => {
        this.cites = cites;
        this.cites.forEach((element)=>{
          this.weatherService.getWeather(element.name).then(content=>{
            element.temp = Math.round(content.main.temp)
          })
        })
      });
  }
}
