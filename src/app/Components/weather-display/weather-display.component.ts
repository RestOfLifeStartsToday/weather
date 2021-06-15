import { EventEmitter, Input, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { GetWeatherService } from 'src/app/Core/get-weather.service';
import { searchWeatherData } from 'src/app/Models/searchWeatherData.model';
import { WeatherData } from 'src/app/Models/WeatherData.model';
import { WeatherGraphicalDisplayComponent } from '../weather-graphical-display/weather-graphical-display.component';


@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  city: string;
  measureType: string;
  @Input() cityWeatherData: searchWeatherData;
  @Output() foundCityWeatherData:EventEmitter<searchWeatherData>=new EventEmitter();
  @ViewChild(WeatherGraphicalDisplayComponent) graphicalDisplay: WeatherGraphicalDisplayComponent;

  constructor(private weatherService: GetWeatherService) { }

  
  ngOnInit(): void {
  }

  getWeatherData() {
    
    this.weatherService.getWeatherByCity(this.city, this.measureType).subscribe(
      res=>{
        if(res!=null){
          let data: WeatherData=res as WeatherData;

          this.cityWeatherData.cityName=this.city;
          this.cityWeatherData.measureType=this.measureType;
          this.cityWeatherData.weatherData=data;

          this.graphicalDisplay.cityWeatherData=this.cityWeatherData;

          this.foundCityWeatherData.emit(this.cityWeatherData);
        }
      },
      err=>{
        console.log(err);
      }
    );

  }

  addCity() {
    this.getWeatherData();
  }

}
