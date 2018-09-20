import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApodService } from '../apod.service';
import { Apod } from '../apod';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  apod: Apod;
  date: string;

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private apodService: ApodService
  ) { }

  ngOnInit() {
    //known video date
    //this.getApod('2012-07-31');
    this.route.params.subscribe(
      params => {
        let date= params['date'];
        this.getApod(date);
        this.date = this.randomDate(
          new Date(1995,5,16),
          new Date()
        );
      });

  }

  randomDate(start, end){
      let date = new Date(
        start.getTime() + Math.random() *
        (end.getTime() - start.getTime())
    );

    let d:any = date.getDate();
    let m:any = date.getMonth() + 1;
    let y:any = date.getFullYear();

    if (m < 10){
        m = '0' +m;
    }

    if (d < 10){
        d = '0' +d;
    }

    return y + '-' + m + '-' + d;

  }

  getApod(date:string=''):void {
    this.apodService.getApod(date)
    .subscribe(apod => this.apod = apod);
  }


}
