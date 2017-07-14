import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather = {};
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this._httpservice.getWeather("chicago,il")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}