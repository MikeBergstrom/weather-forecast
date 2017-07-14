import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather = {};
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this._httpservice.getWeather("dallas,tx")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}

