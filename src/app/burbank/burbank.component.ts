import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
    weather = {};
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this._httpservice.getWeather("burbank,ca")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}
