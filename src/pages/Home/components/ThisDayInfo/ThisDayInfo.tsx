import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from "./ThisDayItem";
import {Weather} from "../../../../store/types/types";

type Props = {
    weather: Weather
}

export interface Item {
    icon_id: string,
    name: string,
    value: string
}

const ThisDayInfo = ({weather}: Props) => {
    let windDirection;
    switch (true) {
        case weather.wind.deg === 0 || weather.wind.deg === 360:
            windDirection = 'северный';
            break;
        case weather.wind.deg === 90:
            windDirection = 'восточный';
            break;
        case weather.wind.deg === 180:
            windDirection = 'южный';
            break;
        case weather.wind.deg === 270:
            windDirection = 'западный';
            break;
        case 0 < weather.wind.deg && weather.wind.deg < 90:
            windDirection = 'северо-восточный';
            break;
        case 90 < weather.wind.deg && weather.wind.deg < 180:
            windDirection = 'юго-восточный';
            break;
        case 180 < weather.wind.deg && weather.wind.deg < 270:
            windDirection = 'юго-западный';
            break;
        case 270 < weather.wind.deg && weather.wind.deg < 360:
            windDirection = 'северо-западный';
            break;
        default:
            windDirection = '';
    }
    const id = weather.weather[0].id
    let precipitation
    switch (true) {
        case id.toString().substring(0, 1) === '5' || id.toString().substring(0, 1) === '3' || id.toString().substring(0, 1) === '4' :
            precipitation = 'Дождь';
            break;
        case id.toString().substring(0, 1) === '6':
            precipitation = 'Снег';
            break;
        case id.toString().substring(0, 1) === '8':
            precipitation = 'Без осадков';
            break;

    }
    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
    },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${Math.floor(weather.main.pressure * 0.750064)} мм ртутного столба`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value:  `${precipitation}`
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${weather.wind.speed} м/с ${windDirection} ${weather.wind.gust ? `с порывами до ${weather.wind.gust} м/c ` : ''} `
        }]
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem item={item} key={item.icon_id}/>
                ))
                }
            </div>
            <img src={cloud} alt='cloud' className={s.cloud}/>
        </div>
    )
}

export default ThisDayInfo