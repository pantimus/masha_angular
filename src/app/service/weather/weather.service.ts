import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { WeatherView } from "../../models/weather.model"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  protected urlBase: string = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
  protected apiKey: string = "075117fd9894fb890da8da84769546e5";
  protected lang: string = "ru";
  protected units: string = "metric";
  private headers = new HttpHeaders({ 
  "Content-Type": "application/json" });

  constructor (private httpClient: HttpClient) {}

  getWeather(cityName?: string): Promise<WeatherView> {
    let params = new HttpParams();
    if (cityName!= undefined) {
        params = params.append("q", cityName);
        params = params.append("appid", this.apiKey);
    }
    let options = {
        headers: this.headers,
        params: params
    }
    return this.httpClient.get<WeatherView>(this.urlBase, options).toPromise()
  }

}
