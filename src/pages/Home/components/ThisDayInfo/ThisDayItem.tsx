import React from 'react';
import {Item} from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss'
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";
type Props = {
    item:Item
}

const ThisDayItem = ({item}: Props) => {
    const {icon_id, name, value}=item
    return (
        <div className={s.this_day_item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>

        </div>
    )
}

export default ThisDayItem