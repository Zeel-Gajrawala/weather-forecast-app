import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather';
import { Dailyforecast } from '../../models/dailyforecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string) {
    let params: HttpParams = new HttpParams();
    params = params.append('appid', environment.appId);
    params = params.append('q', city);
    params = params.append('units', 'metric');

    return this.http.get<Weather>(`${environment.apiUrl}/weather`, { params: params });
  }

  getDailyForecast(city: string, cnt: number) {
    let params: HttpParams = new HttpParams();
    params = params.append('appid', environment.appId);
    params = params.append('q', city);
    params = params.append('units', 'metric');
    params = params.append('cnt', cnt);

    return this.http.get<Dailyforecast>(`${environment.apiUrl}/forecast`, { params: params });
  }
}
