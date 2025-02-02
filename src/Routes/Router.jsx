
import {
            createBrowserRouter,
    
          } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";

         export  const router = createBrowserRouter([
            {
              path: "/",
              element: <Main></Main>,
              children:[
                        {
                                    path:'/',
                                    element:<Register></Register>

                        },
                        {
                          path:'/login',
                          element:<Login></Login>
                        },
                        {
                          path:'/register',
                          element:<Register></Register>
                        },
                        {
                          path:'/product',
                          element:<Products></Products>,
                          loader:()=>fetch('https://job-task-server-gamma-lilac.vercel.app/productsCount')
                        }
              ]
            },
          ]);