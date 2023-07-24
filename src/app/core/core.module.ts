import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather/weather.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WeatherService
  ]
})
export class CoreModule { }
