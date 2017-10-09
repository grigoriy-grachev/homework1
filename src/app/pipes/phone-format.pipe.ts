import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  public transform(phone: number): string {
  const result: string =  String(phone);
  return  '+' + result.slice(0, 1) + '-' + result.slice(1, 4) + '-' + result.slice(4, 7) + '-' + result.slice(7, 9) + '-' + result.slice(9, 11);
  }

}
