import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css']
})
export class WashingtondcComponent implements OnInit {
  weather = {};
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this._httpservice.getWeather("washington,dc")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}