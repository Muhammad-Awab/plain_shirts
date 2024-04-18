import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
const router= createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <div>About</div>
            }
        ]

    },
    
]);
export default router;