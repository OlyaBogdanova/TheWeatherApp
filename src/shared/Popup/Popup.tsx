import React from 'react';
import s from './Popup.module.scss'
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {Item} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";

type Props = {}

const Popup = (props: Props) => {
    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°'
    },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        }]
    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day_temp}>12°</div>
                    <div className={s.day_name}>Среда</div>
                    <div className={s.image}>
                        <GlobalSvgSelector id='sunSm'/>
                    </div>
                    <div className={s.day_time}>Время: <span>21:54</span></div>
                    <div className={s.day_city}>Город: <span>Санкт-Петербург</span></div>
                </div>

                <div className={s.this_day_info}>
                    <div className={s.this_day_info_items}>
                        {items.map((item: Item) => (
                            <ThisDayItem item={item} key={item.icon_id}/>
                        ))
                        }
                    </div>

                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id='close'/>
                </div>
            </div>

        </>
    )
}

export default Popup