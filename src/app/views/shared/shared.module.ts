import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomizeDatePipe } from './pipes/customizeDate/customize-date.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    CustomizeDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    CustomizeDatePipe
  ],
  providers: [
    CustomizeDatePipe
  ]
})
export class SharedModule { }
