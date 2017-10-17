import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle-component',
  templateUrl: './seattle-component.component.html',
  styleUrls: ['./seattle-component.component.css']
})
export class SeattleComponentComponent implements OnInit {
  promise;
  cityname = 'Seattle,WA'
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
