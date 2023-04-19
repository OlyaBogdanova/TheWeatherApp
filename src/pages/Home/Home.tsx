import React, {useEffect} from 'react';
import s from './Home.module.scss';
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchLatLonCity} from "../../store/thunks/fetchLatLonCity";
import {selectCurrentWeatherData} from "../../store/selectors";

type Props = {}

const Home = (props: Props) => {
    const dispatch = useCustomDispatch()
    useEffect(() => {
        dispatch(fetchLatLonCity('moskwa'))
    }, [])
    const {weather, isLoading, response}=useCustomSelector(selectCurrentWeatherData)
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo  weather={weather} />
            </div>
            <Days/>
        </div>
    )
}

export default Home