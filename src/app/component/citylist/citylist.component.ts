import { Component, OnInit } from '@angular/core';
import { WeatherView } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/service/weather/weather.service';
import { City } from '../../models/city.model';
import { CITES } from '../../models/mock-cites.model';
import { CityService } from '../../service/city.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  selectedCity: string;
  cites: City[];
  constructor(private cityService: CityService, private weatherService: WeatherService) { };

  ngOnInit(): void {
    this.getCites();
  }

  onSelect(city: City): void {
    this.selectedCity = city.name;
  }
  getCites(): void {
    this.cityService.getCites() 
      .subscribe(cites => {
        this.cites = cites;
        let temp: number;
        this.cites.forEach((element)=>{
          this.weatherService.getWeather(element.name).then(content=>{
            element.temp = Math.round((content.main.temp-273.15))
          })
        })


      }
        
        );
  }
}
