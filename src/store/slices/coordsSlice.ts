import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Coords} from "../types/types";
import {AxiosResponse} from "axios";


type Response = {
    status: number,
    message: string
}

type CoordCity = {
    coords: Coords,
    isLoading: boolean,
    response: Response
}

const initialState = {
    coords: {
        lat:'',
        lon:''
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const coordsSlice = createSlice({
    name: 'coordsCity',
    initialState,
    reducers: {
        fetchLatLon(state) {
            state.isLoading = true
        },
        fetchLatLonSuccess(state, action: PayloadAction<AxiosResponse<[Coords]>>) {
            state.coords.lat = action.payload.data[0].lat
            state.coords.lon = action.payload.data[0].lon

            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchLatLonError(state, action: PayloadAction<AxiosResponse<[Coords]>>) {
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default coordsSlice.reducer