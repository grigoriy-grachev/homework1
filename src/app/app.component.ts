import { Component } from '@angular/core';

import {hotels} from './data';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mainImg: string = hotels[0].img;
  public filterTypeText: string;
  public weather: any = hotels[0].weather;
  public social_info: any = hotels[0].social_info;

  private hotels: any[] = hotels;


  public showInfo(h:any): void {

  this.mainImg = h.img;
  this.weather = h.weather;
  this.social_info = h.social_info;
  }

  public setFilter (e): void {
  this.filterTypeText = e.target.text;
  }

}

