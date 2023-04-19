import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {coordsSlice} from '../slices/coordsSlice';
import {currentWeatherSlice} from "../slices/currentWeatherSlice";
import {Coords} from "../types/types";

export const fetchCurrentWeather = (payload: [Coords]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getWeather(payload[0])
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch (err) {
        console.log(err)
    }
}