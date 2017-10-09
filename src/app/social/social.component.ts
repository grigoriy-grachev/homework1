import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() public social_info: any;
  @Input() public img: string;

  constructor() { }

  ngOnInit() {
  }

}
