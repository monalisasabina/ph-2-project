import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import App from "./App"

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
        }
       
    ]
}
  
];

export default routes;