import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/core/models/weather';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  loader: boolean = true;
  weatherType: string = '';
  weather: Weather = {};
  weekdays: string[] = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    // this.getWeather('mumbai');
  }

  getWeather(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe((weatherData: Weather) => {
      if (weatherData && Object.keys(weatherData).length > 0) {
        this.weather = weatherData;
      } else {
        this.weather = {};
      }
      this.loader = false;
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.loader = false;
    })
  }

}
