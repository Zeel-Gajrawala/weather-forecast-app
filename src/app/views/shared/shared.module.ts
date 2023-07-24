import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomizeDatePipe } from './pipes/customizeDate/customize-date.pipe';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';



@NgModule({
  declarations: [
    LoaderComponent,
    CustomizeDatePipe,
    WeatherIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    CustomizeDatePipe,
    WeatherIconComponent
  ],
  providers: [
    CustomizeDatePipe
  ]
})
export class SharedModule { }
