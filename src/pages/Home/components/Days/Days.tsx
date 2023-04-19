import React from 'react';
import s from './Days.module.scss';
import Card from "./Card";
import Tabs from "./Tabs";

type Props = {}

export interface Day {
    dayName: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

const Days = (props: Props) => {
    const days: Array<Day> = [
        {
            dayName: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sunSm',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayName: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            dayName: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            dayName: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayName: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayName: 'Сб',
            day_info: '28 авг',
            icon_id: 'sunSm',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            dayName: 'Вс',
            day_info: '28 авг',
            icon_id: 'sunSm',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];
    return (
       <>
           <Tabs/>
           <div className={s.days}>
               {days.map((day)=><Card day={day} key={day.dayName}/>)}
           </div>


       </>
    )
}

export default Days