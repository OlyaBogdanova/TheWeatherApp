import React, { useContext} from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import {ThemeContext} from "../../context/ThemeContext";
import {Theme} from "../../context/ThemeContext";

type Props = {}

const Header = (props: Props) => {
    const {theme, changeTheme}=useContext(ThemeContext)

    const options = [
        {value: 'city-1', label: 'Санкт-Петербург'},
        {value: 'city-2', label: 'Москва'},
        {value: 'city-3', label: 'Вологда'}
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: '100'
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === Theme.DARK ? '#fff' : '#000',
        })
    }

    function changeThemeComponent() {
       changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeThemeComponent}>
                    <GlobalSvgSelector id='change_theme'/>
                </div>
                <div>
                    <Select defaultValue={options[0]} options={options} styles={colourStyles}/>
                </div>
            </div>
        </header>
    )
}

export default Header