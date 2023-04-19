import React, {useEffect, useState} from 'react';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import {router} from "./router";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";
import {Theme, ThemeContext} from "./context/ThemeContext";
import {storage} from "./model/Storage";
import {changeCssRootVariables} from "./model/ChangeCssRootVariables";
import {useCustomDispatch} from "./hooks/store";
import {fetchLatLonCity} from "./store/thunks/fetchLatLonCity";


function App() {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
    const [city, setCity] = useState<string>('')
    const dispatch = useCustomDispatch()
    function changeTheme(theme: Theme) {
        setTheme(theme);
        storage.setItem('theme', theme)
    }

    async function changeCity(e:any){
        setCity(e.value);
       await dispatch(fetchLatLonCity(city))

    }

    useEffect(() => changeCssRootVariables(theme), [theme])

    return (
        <ThemeContext.Provider value={{
            theme, changeTheme, city, changeCity
        }}>
            <div className="global_container">
                {/*<Popup/>*/}
                <div className="container">
                    <Header/>
                    <RouterProvider router={router}/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
