import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather';

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

  getDailyForecast(city: string) {
    let params: HttpParams = new HttpParams();
    params = params.append('appid', environment.appId);
    params = params.append('q', city);
    params = params.append('units', 'metric');
    params = params.append('cnt', 16);

    return this.http.get<Weather>(`${environment.apiUrl}/forecast/daily`, { params: params });
  }
}