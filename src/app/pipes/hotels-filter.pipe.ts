import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: any[], searchType: string): any[] {

    if (!searchType) {
      return hotels;
    }

    return  hotels.filter(  (hotel: any)  =>   hotel.type === searchType  )  ;


  }
}
