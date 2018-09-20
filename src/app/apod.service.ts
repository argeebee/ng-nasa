import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private domain:string = 'https://api.nasa.gov/planetary/';
  private args:string = 'apod?api_key=';
  private nasaKey:string = 'uVo1QswHKxKm9IY6dJ9p7gqZKj0SahqfY7J8482g';
  private url:string;

  constructor(private http:HttpClient){}

  private setUrl(date=''){
    if (date){
      date=`&date=${date}`;
    }
    this.url = `${this.domain}${this.args}${this.nasaKey}${date}`;
  }

  public getApod(date=''): Observable<Apod>{

    this.setUrl(date);
    console.log(this.url);

    return this.http.get<Apod>(this.url);
  }
}
