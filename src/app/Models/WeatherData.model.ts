import { main } from "./main.model";
import { Weather } from "./Weather.model";

export class WeatherData {
    weather: Weather[];
    main: main;
    id: number;
    name: string;
}

