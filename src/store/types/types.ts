export type Weather = {
    main: {
        temp: number,
        feels_like: number,
        pressure:number
    },
    wind:{
        speed:number,
        deg:number,
        gust:number
    }

}
export type Coords = {
    lat: string,
    lon: string,
}