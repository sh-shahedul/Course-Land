// import React, { use, useEffect, useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router';
// import logo from '../../assets/logo.png'
// import { IoIosArrowDown } from 'react-icons/io';
// import { AuthContext } from '../../Provider/AuthContext';
// import toast from 'react-hot-toast';
// import { FaHome } from 'react-icons/fa';
// import { TbLayoutDashboardFilled } from 'react-icons/tb';
// import { MdLibraryBooks } from 'react-icons/md';
// import { CiLogout } from 'react-icons/ci';
// import { FiLogIn } from 'react-icons/fi';
// import userLogo from '../../assets/user.png'
// import { BiSolidContact } from "react-icons/bi";
// import { BsFillCCircleFill } from 'react-icons/bs';
// import { ImBlogger } from 'react-icons/im';

// const Navbar = () => {
// const {user,signOutUser} =use(AuthContext)
// const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
// const navigate = useNavigate()
//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

// const handelSignOut =()=>{
//         signOutUser()
//          .then(()=>{
//           toast.success(' Logout Successful 🎉')         
//          })
//          .catch((error)=>{
//           console.log(error)
//           })  
// }

//  const handleRole = () => {

       
//        navigate("/dashboard/myEnrollCourse")
       
//     }
// const links = <>
//             <li><NavLink  to="/" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}><FaHome />  Home </NavLink></li>
//             <li><NavLink to="/courses" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <MdLibraryBooks />  Courses </NavLink> </li>
//             <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <BsFillCCircleFill /> About </NavLink> </li>
//             <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <BiSolidContact />  Contact </NavLink> </li>
//             <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <ImBlogger /> Blog </NavLink> </li>

//     {
//     user && 
         
//        <>
//        <li>
//          <button onClick={handleRole}  className="font-bold md:text-lg text-white hover:text-[#FAB12F]">
           
//             Dashboard
         
//          </button>
//         </li>
//         <li className="dropdown dropdown-end">
//        <label
//         tabIndex={0}
//         className="flex items-center gap-1 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-purple-100 cursor-pointer dark:text-gray-300">
//       <TbLayoutDashboardFilled />  Dashboard <IoIosArrowDown />
//         </label>
//       <ul
//         tabIndex={0}
//         className="dropdown-content menu p-2 shadow bg-white dark:bg-black rounded-box w-52">
//         <li> <NavLink to='/addCourse' className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> Add Course</NavLink></li>
//         <li> <NavLink to='/myAddCourse' className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> My Added Course </NavLink></li>
//         <li> <NavLink to='/myEnrollCourse' className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> My Enrolled Course</NavLink></li>
        
//       </ul>
//     </li></>
//     }
            
// </>


//   return (
// <div className="sticky top-0 z-50  bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200  dark:from-black dark:via-black dark:to-black rounded-b-2xl">
//   <div className="navbar max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm text-gray-800 w-[97%] mx-auto">

//     {/* Left */}
//     <div className="navbar-start">
//       <div className="dropdown">
//         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700 -ml-4">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-gray-300" fill="none"
//             viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16" />
//           </svg>
//         </div>
//         <ul
//           tabIndex={0}
//           className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-200 dark:bg-black  backdrop-blur-md rounded-box w-52">
//           {links}
//            <div className='flex items-start justify-start ml-2'>
//        <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input
//    onChange={(e) => handleTheme(e.target.checked)}
//   type="checkbox" className="theme-controller" value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-6 w-6 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-6 w-6 fill-current dark:text-gray-300 "
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label>
//      </div>
//         </ul>
//       </div>

//       {/* Logo */}
//       <Link to='/'><img className='sm:w-40 w-28' src={logo} alt="" /></Link>
//     </div>

//     {/* Center */}
//     <div className="navbar-center hidden lg:flex">
//       <ul className="menu menu-horizontal px-1 text-gray-800 font-semibold text-[18px]">
//         {links}
//       </ul>
//     </div>

//     {/* Right */}
//     <div className="navbar-end flex items-center gap-3">

//       {/* Avatar */}
//       {user && (
//         <div className="text-white w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer relative">
//           <img
//           referrerPolicy='no-referrer'
//             className="w-9 h-9 rounded-full"
//             src={user.photoURL||userLogo}
//             alt="User Image"
//           />
//         </div>
//       )}
//     {/* theme togoole  */}
//      <div className='hidden md:block'>
//        <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input
//    onChange={(e) => handleTheme(e.target.checked)}
//   type="checkbox" className="theme-controller " value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-8 w-8 fill-current "
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-8 w-8 fill-current dark:text-gray-300"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label>
//      </div>

//       {/* Login / Sign Out */}
//       <div>
//         {user ? (
//           <button
//             onClick={handelSignOut}
//             className=" flex items-center gap-1 px-3 py-2 md:px-4 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium  rounded-full hover:from-indigo-500 hover:to-pink-500"><CiLogout/>
//             Sign Out
//           </button>
//         ) : (
//           <Link
//             to="/login"
//            className="flex items-center gap-1 px-3 py-2 md:px-4 rounded-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium  hover:from-indigo-500 hover:to-pink-500"><FiLogIn/>
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   </div>
// </div>


//   );
// };

// export default Navbar;

import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import { FaBuysellads, FaHome } from 'react-icons/fa';
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { MdLibraryBooks } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { FiLogIn } from 'react-icons/fi';
import userLogo from '../../assets/user.png'
import { BiSolidContact } from "react-icons/bi";
import { ImBlogger } from 'react-icons/im';
import useRole from '../../Hook/useRole';

const Navbar = () => {
const {user,signOutUser} =use(AuthContext)
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
const navigate = useNavigate()
const{role} =useRole()
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

const handelSignOut =()=>{
        signOutUser()
         .then(()=>{
          toast.success(' Logout Successful 🎉')         
         })
         .catch((error)=>{
          console.log(error)
          })  
}


const handleRole = () => {

       
        if (role === "student") {
            navigate("/dashboard/addCourse")
        }
        if (role === "admin") {
            navigate("/dashboard/userManagement")
        }
        
    }

const links = <>
            <li><NavLink  to="/" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}><FaHome />  Home </NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <MdLibraryBooks />  Courses </NavLink> </li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <FaBuysellads /> About </NavLink> </li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <BiSolidContact />  Contact </NavLink> </li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-pink-600 font-bold " : "dark:text-gray-300"}> <ImBlogger /> Blog </NavLink> </li>
</>


  return (
<div className="sticky top-0 z-50  bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200  dark:from-black dark:via-black dark:to-black rounded-b-2xl">
  <div className="navbar max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm text-gray-800 w-[97%] mx-auto">

    {/* Left */}
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700 -ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-200 dark:bg-black  backdrop-blur-md rounded-box w-52">
          {links}
           <div className='flex items-start justify-start ml-2'>
       <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input
   onChange={(e) => handleTheme(e.target.checked)}
  type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-6 w-6 fill-current dark:text-gray-300 "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
     </div>
        </ul>
      </div>

      {/* Logo */}
      <Link to='/'><img className='sm:w-40 w-28' src={logo} alt="" /></Link>
    </div>

    {/* Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-gray-800 font-semibold text-[18px]">
        {links}
      </ul>
    </div>

    {/* Right */}
    <div className="navbar-end flex items-center gap-3">
       {/* theme toggle */}
     <div className='hidden md:block'>
       <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input
   onChange={(e) => handleTheme(e.target.checked)}
  type="checkbox" className="theme-controller " value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current dark:text-gray-300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
     </div>
      {/* Avatar with Dropdown */}
      {user && (
        <div className="dropdown dropdown-end">
          
          <div tabIndex={0} role="button" className="text-white w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer relative">
            <img
              referrerPolicy='no-referrer'
              className="w-9 h-9 rounded-full"
              src={user.photoURL||userLogo}
              alt="User Image"
            />
          </div>
          
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-800 rounded-box  mt-3">
            <div className='px-4 py-2 bg-purple-200 rounded-lg  font-semibold'>
            <h2>{user.displayName}</h2>
            <h2>{user.email}</h2>
          </div>
            <li>

              <button 
                onClick={handleRole} 
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-purple-100 dark:hover:bg-gray-700 font-semibold">
                <TbLayoutDashboardFilled className="text-lg" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={handelSignOut}
                className=" flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 hover:bg-purple-100 dark:hover:bg-gray-700 font-semibold">
                <CiLogout className="text-lg" />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}

    

      {/* Login Button - Only show when no user */}
      {!user && (
        <Link
          to="/login"
          className="flex items-center gap-1 px-3 py-2 md:px-4 rounded-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium  hover:from-indigo-500 hover:to-pink-500">
          <FiLogIn/>
          Login
        </Link>
      )}
    </div>
  </div>
</div>


  );
};

export default Navbar;