import { Component, OnInit } from '@angular/core';
import { searchWeatherData } from 'src/app/Models/searchWeatherData.model';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {

  weatherData: searchWeatherData[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.weatherData.push(new searchWeatherData());
  }

  foundCityWeatherDataHandler(weatherData: searchWeatherData){
    this.weatherData[this.weatherData.length-1]=weatherData;
    if(this.weatherData.length<2){
      this.weatherData.push(new searchWeatherData());
    }
  }

}
