import React, {useContext} from 'react';
import s from './ThisDay.module.scss'
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../../store/types/types";
import {ThemeContext} from "../../../../context/ThemeContext";

type Props = {
    weather: Weather
}

const ThisDay = ({weather}: Props) => {
    const {city} = useContext(ThemeContext)
    const iconId = weather.weather[0].icon
    let cityName
    switch (city) {
        case 'saint-peterburg':
            cityName = 'Санкт-Петербург';
            break;
        case 'moskwa':
            cityName = 'Москва';
            break;
        case 'vologda':
            cityName = 'Вологда';
            break;
        default:
            cityName = 'Москва'
    }
    let iconName
    console.log(iconId)
    switch (iconId) {
        case '01d':
            iconName = 'sun';
            break;
        case '02d' || '03d':
            iconName = 'mainly_cloudy';
            break;
        case '10d':
            iconName = 'small_rain_sun';
            break;
        case '04d':
            iconName = 'small_rain';
            break;
        case '09d' || '11d':
            iconName = 'rain';
            break;
        default:
            iconName = 'sun'
    }
    console.log(iconName)

    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.top_block_wrapper}>
                    <div className={s.this_temp}>{Math.floor(weather.main.temp)}</div>
                    <div className={s.this_day_name}>Сегодня</div>

                </div>
                <GlobalSvgSelector id={iconName}/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>Время: <span>{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
                </div>
                <div className={s.this_city}>Город: <span>{cityName}</span></div>
            </div>
        </div>
    )
}

export default ThisDay