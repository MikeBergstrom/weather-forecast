import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather = {};
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this._httpservice.getWeather("sanjose,ca")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
 
}
