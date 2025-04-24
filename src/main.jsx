import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './home.jsx';
import Blogs from './Blogs.jsx';

import Root from './Root.jsx';
import MyBooking from './MyBooking.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<p className='text-center font-bold text-black'>sorry</p>,
    children:[
    { index: true,
      Component: Home ,
      path:`Home`,

    },
    { path: "Blogs", Component:Blogs },
    { path: "MyBooking", Component:MyBooking }]
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
