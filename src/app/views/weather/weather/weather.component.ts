import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dailyforecast } from 'src/app/core/models/dailyforecast';
import { Weather } from 'src/app/core/models/weather';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  loader: boolean = false;
  weatherType: string = '';
  weather: Weather = {};
  forecast: Dailyforecast = {};
  today!: Date;
  search: string = 'Mumbai';

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.today = new Date();
    this.searchCity();
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
      this.weather = {};
    })
  }

  getDailyForecast(city: string) {
    this.weatherService.getDailyForecast(city, 50).subscribe((forecast: Dailyforecast) => {
      if (forecast && forecast.list && forecast.list.length > 0) {
        this.forecast = forecast;
      } else {
        this.forecast = {};
      }
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.forecast = {};
    })
  }

  searchCity() {
    this.loader = true;
    this.getWeather(this.search);
    this.getDailyForecast(this.search);
  }

}
