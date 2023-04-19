import {configureStore, combineReducers} from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import coordsCityReducer from "./slices/coordsSlice";

const rootReducer = combineReducers({
    currentWeatherSliceReducer, coordsCityReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']