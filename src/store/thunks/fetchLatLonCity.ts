import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {coordsSlice} from '../slices/coordsSlice';
import {currentWeatherSlice} from "../slices/currentWeatherSlice";
import {fetchCurrentWeather} from "./fetchCurrentWeather";

export const fetchLatLonCity = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(coordsSlice.actions.fetchLatLon())
        const res = await WeatherService.getLatLonCity(payload)
        if (res.status === 200) {
            dispatch(coordsSlice.actions.fetchLatLonSuccess(res))
            dispatch(fetchCurrentWeather(res.data))

        } else {
            dispatch(coordsSlice.actions.fetchLatLonError(res))
        }
    } catch (err) {
        console.log(err)
    }
}