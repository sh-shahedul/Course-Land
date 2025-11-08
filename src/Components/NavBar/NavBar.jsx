import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
const {user,signOutUser} =use(AuthContext)

const handelSignOut =()=>{
        signOutUser()
         .then(()=>{
          toast.success(' Logout Successful 🎉')         
         })
         .catch((error)=>{
          console.log(error)
          })  
}


const links = <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => isActive ? "text-pink-600 font-bold" : ""}>
                Courses
              </NavLink>
            </li>
    {
        user &&     
        <li className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="flex items-center gap-1 px-4 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-purple-100 cursor-pointer"
      >
        Dashboard <IoIosArrowDown />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
      >
        <li>
          <NavLink className="block px-4 py-2 text-gray-700 hover:bg-pink-100 rounded-md">
            Item 1
          </NavLink>
        </li>
        <li>
          <NavLink className="block px-4 py-2 text-gray-700 hover:bg-pink-100 rounded-md">
            Item 2
          </NavLink>
        </li>
      </ul>
    </li>
    }
            
</>


  return (
    <div
      className="sticky top-0 z-50 bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200 ">
      <div className="navbar  max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm text-gray-800 w-[97%] mx-auto">

        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700 -ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-200 backdrop-blur-md rounded-box w-52">
            {links}
            </ul>
          </div>
       
             <img className='w-40' src={logo} alt="" />
         
        </div>
        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-800 font-semibold text-[18px]">
          {links}
          </ul>
        </div>
        {/*  Right */}
        <div className="navbar-end gap-3">
               {
                user? <div className="text-white w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer relative">
                <img
                  className="w-9 h-9 rounded-full"
                  src={user.photoURL}
                  alt="User Image"
                />
              </div> :''
               }
          {/* User Avatar with title */}

         {/* {user && (<img src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User Avatar" title={user.displayName || "User"} className="w-9 h-9 rounded-full border-2 border-purple-500 cursor-pointer" />)
          }  */}

          {/* Login / Logout Buttons */}
            
          {/* <Link to="/login"
              onClick={''}
              className="px-4 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-md transition-all duration-300">Sign Out</Link> */}

             <div className="flex gap-3">

                 {
                    user? 
                    ( <button onClick={handelSignOut}  className="px-3 py-2 md:px-6 md:py-2 rounded-md bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white font-semibold  hover:from-indigo-500 hover:to-pink-500 ">Sign Out</button>) 

                    : (<Link to="/login" className="px-3 py-2 md:px-6 md:py-2 rounded-md bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white font-semibold  hover:from-indigo-500 hover:to-pink-500 ">Login</Link>)
                 }


            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;