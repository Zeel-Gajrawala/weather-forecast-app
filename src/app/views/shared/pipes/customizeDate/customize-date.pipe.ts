import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customizeDate'
})
export class CustomizeDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(date: string | Date | number, dateFormat: string): string | Date | number {
    let transformedDate = this.datePipe.transform(date, dateFormat);
    return transformedDate ? transformedDate : '';
  }

}
