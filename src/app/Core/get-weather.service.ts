import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  apiKey: string = '0d7303c17ee3d3482cd82a2ad273a90d';
  baseUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getWeatherByCity(cityName: string, measureType: string) {
    return this.http.get(`${this.baseUrl}/weather?q=${cityName}&units=${measureType}&appid=${this.apiKey}`);
  }
}

//{"coord":{"lon":34.8,"lat":32.0833},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":295.73,"feels_like":295.9,"temp_min":293.86,"temp_max":296.58,"pressure":1011,"humidity":71},"visibility":10000,"wind":{"speed":1.54,"deg":0},"clouds":{"all":20},"dt":1623709111,"sys":{"type":1,"id":6845,"country":"IL","sunrise":1623724452,"sunset":1623775709},"timezone":10800,"id":293396,"name":"Tel Aviv","cod":200}
