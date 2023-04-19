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
    },
    weather:[{
        icon:string,
        id:number
    }]


}
export type Coords = {
    lat: string,
    lon: string,
}