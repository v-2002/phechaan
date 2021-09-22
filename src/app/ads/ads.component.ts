import { Component, Input, OnInit } from '@angular/core';
import { Ads } from '../ads.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  @Input() obj?: Ads;
  constructor() { }

  ngOnInit(): void {
    console.log(this.obj);
  }

}
