import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DailyForecastList, Dailyforecast } from 'src/app/core/models/dailyforecast';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnChanges {

  @Input() forecast: Dailyforecast = {};
  dailyForecast: { date?: string | number | Date, temp?: number, weather?: string }[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['forecast'] && changes['forecast'].currentValue != changes['forecast'].previousValue) {
      this.getDailyForecast();
    }
  }

  getDailyForecast() {
    this.dailyForecast = [];

    if (this.forecast && this.forecast.list && this.forecast.list.length > 0) {

      let forecastGroupedData = this.forecast.list!.reduce((ArrObj, weather) => {
        ArrObj[((weather.dt_txt!).split(" "))[0]] = ArrObj[((weather.dt_txt!).split(" "))[0]] || [];
        ArrObj[((weather.dt_txt!).split(" "))[0]].push(weather);
        return ArrObj;
      }, Object.create(null));

      Object.keys(forecastGroupedData).map((forecastData) => {
        let dailyWeather: string[] = [];
        let totalTemp: number = 0;

        forecastGroupedData[forecastData].map((weatherData: DailyForecastList) => {
          totalTemp += weatherData.main?.temp!;
          dailyWeather.push(weatherData.weather![0].main!);
        });

        let avgTemp: number = (totalTemp / forecastGroupedData[forecastData].length);

        this.dailyForecast.push({
          date: forecastData,
          temp: Math.round(avgTemp),
          weather: this.getFrequentData(dailyWeather)
        })
      })

    } else {
      this.dailyForecast = [];
    }
  }

  getFrequentData(array: string[]): string {
    let counts: { [key: string | number]: number } = {};
    let compare: number = 0;
    let mostFrequent: string = '';

    for (let i = 0, len = array.length; i < len; i++) {
      let word = array[i];

      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = array[i];
      }
    }
    return mostFrequent;
  }

}
