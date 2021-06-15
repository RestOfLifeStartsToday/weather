import { Component, Input, OnInit } from '@angular/core';
import { searchWeatherData } from 'src/app/Models/searchWeatherData.model';

@Component({
  selector: 'app-weather-graphical-display',
  templateUrl: './weather-graphical-display.component.html',
  styleUrls: ['./weather-graphical-display.component.css']
})
export class WeatherGraphicalDisplayComponent implements OnInit {

  @Input() set cityWeatherData(value: searchWeatherData){
    if(value.weatherData!=undefined){
      this.temprature=value.weatherData.main.temp.toString();
      this.imgPath=value.weatherData.weather[0].icon;
      this.cityName=value.cityName;
    }
  }
  
  imgPath: string='';
  temprature: string='';
  cityName: string='';

  constructor() { }

  ngOnInit(): void {
    
  }

}
