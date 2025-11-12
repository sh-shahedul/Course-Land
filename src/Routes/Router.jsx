import { createBrowserRouter } from "react-router";
import Home from "../page/Home/Home";
import RootLayOut from "../Layout/RootLayOut";
import Courses from "../page/Courses/Courses";
import Login from "../page/LogIn/Login";
import Register from "../page/Register/Register";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import PrivateRouter from "../Provider/PrivateRouter";
import AddCourse from "../page/AddCourse/AddCourse";
import MyAddedCourse from "../page/MyAddedCourse/MyAddedCourse";
import MyEnrolledCourse from "../page/MyEnrolledCoursed/MyEnrolledCourse";
import CourseDetails from "../page/CourseDetails/CourseDetails";
import UpdateCourse from "../page/UpdateCourse/UpdateCourse";
import Loading from "../Components/Loading/Loading";
import CourseErrorPage from "../Components/ErrorPage/CourseErrorPage";





export const router = createBrowserRouter([
  {
     path: "/",
      hydrateFallbackElement:<Loading></Loading>,
     Component:RootLayOut,
      errorElement:<CourseErrorPage></CourseErrorPage>,
     children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'courses',
            Component:Courses,
        },
        {
            path:'login',
            Component:Login,
        },
        {
            path:'register',
            Component:Register,
        },
        {
            path:'forgotpass',
            Component:ForgotPassword,

        },
        {
         path:'/details/:id',
         element:<PrivateRouter><CourseDetails></CourseDetails></PrivateRouter>,
        
         
        },
        {
          path:'addCourse',
          element:<PrivateRouter><AddCourse></AddCourse></PrivateRouter>
        },
        {
          path:'myAddCourse',
          element:<PrivateRouter><MyAddedCourse></MyAddedCourse></PrivateRouter>
        },
        {
         path:'/updateCourse/:id',
         element:<PrivateRouter><UpdateCourse></UpdateCourse></PrivateRouter>
        },
        {
          path:'myEnrollCourse',
          element:<PrivateRouter><MyEnrolledCourse></MyEnrolledCourse></PrivateRouter>
        }
       
        
     ]
  },
]);