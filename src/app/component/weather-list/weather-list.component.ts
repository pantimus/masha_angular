import { Component, OnInit, Input } from '@angular/core';
import { WeatherView } from 'src/app/models/weather.model';
import { City } from '../../models/city.model';
import {WeatherService} from "../../service/weather/weather.service";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() city: string;

  public content: WeatherView;

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.getWeather()
  }
  ngOnChanges(): void {
    this.getWeather()
  }
  getWeather() {
    console.log(this.city)
    this.weatherService.getWeather(this.city).then(
      content => {
        console.log(content)
        this.content = content
      }
    )
  }
}
