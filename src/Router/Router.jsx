import { createHashRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Authentication/Register/Register";
import FarmerRegister from "../Pages/Authentication/FarmerRegister/FarmerRegister";
import FarmerLogin from "../Pages/Authentication/FarmerLogin/FarmerLogin";
import Login from "../Pages/Authentication/Login/Login";


export const router = createHashRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/aboutUs',
          Component:AboutUs
        },
        {
          path:'/coverage',
          Component:Coverage
        },
    ]
  },

  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'farmerRegister',
        Component:FarmerRegister
      },
      {
        path:'farmerLogin',
        Component:FarmerLogin
      }

      
    ]
  }

]);

