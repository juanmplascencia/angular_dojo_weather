import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-washington-component',
  templateUrl: './washington-component.component.html',
  styleUrls: ['./washington-component.component.css']
})
export class WashingtonComponentComponent implements OnInit {
  promise;
  cityname = 'Washington,DC'
  constructor(private _weatherService: WeatherService) { }
  data = null;
  status = null;
  ngOnInit() {
    this.promise = this._weatherService.retrieveWeather(this.cityname);
    if (this.promise){
      this.promise.then((city) => {
        if(city.main){
          this.data = city.main;
        }
        if(city.weather){
          this.status = city.weather[0].main;
        }
      })
    }
  }
}
