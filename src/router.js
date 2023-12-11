import {createBrowserRouter} from "react-router-dom";
import Home from './pages/home'
import Accomodation from "./pages/accomodation";
import About from "./pages/about";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation />,

    },
    {
        path: "/about",
        element: <About />,

    },
]);

export default router