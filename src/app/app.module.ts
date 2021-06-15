import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './Components/weather-display/weather-display.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDashboardComponent } from './Components/weather-dashboard/weather-dashboard.component';
import { WeatherGraphicalDisplayComponent } from './Components/weather-graphical-display/weather-graphical-display.component';
import { WeatherTextDisplayComponent } from './Components/weather-text-display/weather-text-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WeatherDashboardComponent,
    WeatherGraphicalDisplayComponent,
    WeatherTextDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
