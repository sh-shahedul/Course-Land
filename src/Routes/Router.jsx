import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import RootLayOut from "../Layout/RootLayOut";
import Courses from "../page/Courses/Courses";



export const router = createBrowserRouter([
  {
     path: "/",
     Component:RootLayOut,
     children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'courses',
            Component:Courses,
        },
        
     ]
  },
]);