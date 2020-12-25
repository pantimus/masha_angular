import { Component, OnInit, Input } from '@angular/core';
import { WeatherView } from 'src/app/models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../service/weather/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  @Input() city: string;

  public content: WeatherView;
  private name: string;
  public sunrise: string;
  public sunset: string;
  
  constructor(
    private weatherService: WeatherService,
    private router: ActivatedRoute
  ) {
    this.name = router.snapshot.params['name'];
  }
  ngOnInit(): void {
    this.getWeather(this.name);
  }
  dataFormat(unix_timestamp: number): string {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = '0' + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = '0' + date.getSeconds();
    // Will display time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
  ngOnChanges(): void {
    this.getWeather(this.name);
  }
  getWeather(name: string) {
    this.weatherService.getWeather(name).then((content) => {
      console.log(content);
      this.content = content;
      this.sunrise= this.dataFormat(this.content.sys.sunrise)
      this.sunset= this.dataFormat(this.content.sys.sunset)
    });
  }
}
