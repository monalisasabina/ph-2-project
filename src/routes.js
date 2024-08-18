import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import App from "./App"
import Description from "./pages/Description";
import ToolUsers from "./pages/ToolUsers";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />
        }, 
        {
            path: "/tools",
            element: <Tools />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/description/:id",
            element: <Description/>
        },
        {
            path: "/tool-user/:id",
            element: <ToolUsers/>
        }
       
       
    ]
}
  
];

export default routes;