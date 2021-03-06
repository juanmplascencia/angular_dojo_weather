import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-san-jose-component',
  templateUrl: './san-jose-component.component.html',
  styleUrls: ['./san-jose-component.component.css']
})
export class SanJoseComponentComponent implements OnInit {
  promise;
  cityname = 'SanJose,CA'
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
