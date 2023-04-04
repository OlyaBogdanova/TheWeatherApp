import {createBrowserRouter} from 'react-router-dom'
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/statistics",
        element: <MonthStatistics/>,
    },
]);