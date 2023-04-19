import axios, {AxiosResponse} from "axios";
import {Weather, Coords} from "../store/types/types";
import api from "../axios";
export class WeatherService{
    static getLatLonCity(city:string):Promise<AxiosResponse<[Coords]>>{
        return api.get<[Coords]>(`/geo/1.0/direct?q=${city}&limit=5`)
    }
    static getWeather({lat, lon}:[Coords][0]):Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(`/data/2.5/weather?lat=${lat}&lon=${lon}`)
    }

}