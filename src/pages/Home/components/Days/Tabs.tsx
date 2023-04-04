import React from 'react';
import s from './Days.module.scss';

type Props = {}
interface TabsType{
    value:string
}

const Tabs = (props: Props) => {
    const tabs:Array<TabsType> = [
        {value: 'На неделю'},
        {value: 'На 10 дней'},
        {value: 'На месяц'}
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map(tab=>(<div className={s.tab} key={tab.value}>{tab.value}</div>))}
            </div>

            <div className={s.cancel}>Отменить</div>
        </div>
    )
}

export default Tabs