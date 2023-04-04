import React from 'react';
import s from './Days.module.scss';
import {Day} from "./Days";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";


type Props = {
    day: Day
}

const Card = ({day}: Props) => {
    const {dayName, day_info, temp_day, icon_id, temp_night, info}=day
    return (
        <div className={s.card}>
            <div className={s.day}>{dayName}</div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.image}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.temp_day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}

export default Card