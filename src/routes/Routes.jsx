
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";



const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                }
            ]
    }
]);


export default route;