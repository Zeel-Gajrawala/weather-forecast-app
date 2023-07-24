import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { SharedModule } from '../shared/shared.module';
import { WeeklyWeatherComponent } from './weekly-weather/weekly-weather.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherComponent,
    WeeklyWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    DatePipe,
    DecimalPipe,
    FormsModule
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ]
})
export class WeatherModule { }
