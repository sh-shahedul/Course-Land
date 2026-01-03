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
import AboutUs from "../page/AboutUs/About";
import ContactUs from "../page/ContactUs/ContactUs";
import PrivacyPolicy from "../page/PrivacyPolicy/PrivacyPolicy";
import FAQ from "../page/FAQ/FAQ";
import Blog from "../page/Blog/Blog";
import Dashboardlayout from "../Layout/Dashboardlayout";
import MyProfile from "../page/MyProfile/MyProfile";
import UserManagement from "../page/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import TermsAndService from "../page/TermsAndService/TermsAndService";
import Careers from "../page/Careers/Careers";
import Partnerships from "../page/Partnerships/Partnerships";





export const router = createBrowserRouter([
  {
     path: "/",
      
     Component:RootLayOut,
    
      errorElement:<CourseErrorPage></CourseErrorPage>,
      hydrateFallbackElement:<Loading></Loading>,
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
          path:'about',
          Component:AboutUs,
        },
        {
          path:'contact',
          Component:ContactUs,
        },
        {
          path:'privacy',
          Component:PrivacyPolicy,
        },
        {
          path:'faq',
          Component:FAQ,
        },
        {
          path:'blog',
          Component:Blog,
        },
        {
         path:'/details/:id',
         element:<CourseDetails></CourseDetails>
        },
        {
         path:'terms',
         element:<TermsAndService></TermsAndService>
        },
        {
         path:'careers',
         element:<Careers></Careers>
        },
        {
         path:'partner',
         element:<Partnerships></Partnerships>
        },
        // {
        //   path:'addCourse',
        //   element:<PrivateRouter><AddCourse></AddCourse></PrivateRouter>
        // },
        // {
        //   path:'myAddCourse',
        //   element:<PrivateRouter><MyAddedCourse></MyAddedCourse></PrivateRouter>
        // },
        // {
        //  path:'/updateCourse/:id',
        //  element:<PrivateRouter><UpdateCourse></UpdateCourse></PrivateRouter>
        // },
        // {
        //   path:'myEnrollCourse',
        //   element:<PrivateRouter><MyEnrolledCourse></MyEnrolledCourse></PrivateRouter>
        // }
       
        
     ]
  },
  {
     path:'dashboard',
    HydrateFallback:<Loading></Loading>,
    element:<PrivateRouter><Dashboardlayout></Dashboardlayout></PrivateRouter>,
    children: [
      {
        path:'myEnrollCourse',
        Component:MyEnrolledCourse,
     
      },
              {
          path:'addCourse',
          element:<StudentRoute><AddCourse></AddCourse></StudentRoute>
        },
        {
          path:'myAddCourse',
          element:<StudentRoute><MyAddedCourse></MyAddedCourse></StudentRoute>
        },
        {
         path:'updateCourse/:id',
         element:<StudentRoute><UpdateCourse></UpdateCourse></StudentRoute>
        },
        {
         path:'myprofile',
         element:<MyProfile></MyProfile>
        },
        {
         path:'userManagement',
         element:<AdminRoute><UserManagement></UserManagement></AdminRoute>
        },
    ]
  }
]);