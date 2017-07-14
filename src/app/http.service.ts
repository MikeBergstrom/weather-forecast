import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getWeather(city){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ba94b18d66eef02f7aaf4105c37e7118&units=imperial").map(data=>data.json()).toPromise()
  }
}