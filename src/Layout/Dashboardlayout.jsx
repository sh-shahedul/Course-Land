// import React from 'react';
// import { IoHomeSharp } from 'react-icons/io5';
// import { MdLibraryAdd } from 'react-icons/md';
// import { NavLink, Outlet } from 'react-router';
// import logo from '../assets/logo.png'
// import { HiViewBoards } from 'react-icons/hi';

// const Dashboardlayout = () => {
//     return (
//         <div className="drawer lg:drawer-open">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Navbar */}
//     <nav className="navbar w-full bg-base-300">
//       <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//         {/* Sidebar toggle icon */}
//         <HiViewBoards size={25} className=''/>
//       </label>
//       {/* <div className="px-4">Navbar Title</div> */}
//       <p><img className='sm:w-40 w-28' src={logo} alt="" /></p>
//     </nav>
//     {/* Page content here */}
//     <Outlet></Outlet>
   
//   </div>

//   <div className="drawer-side is-drawer-close:overflow-visible">
//     <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//     <div className="flex min-h-full flex-col items-start bg-pink-300 is-drawer-close:w-14 is-drawer-open:w-64">
//       {/* Sidebar content here */}
//       <ul className="menu w-full grow">
//         {/* List item */}
//         <li>
//           <NavLink to='/'className={({ isActive }) =>`is-drawer-close:tooltip is-drawer-close:tooltip-right -ml-1 mt-2 ${isActive ? 'text-[#FAB12F]' : 'text-white' }` } data-tip="Home page">
//             {/* Home icon */}
//            <IoHomeSharp size={25} />
//             <span className="is-drawer-close:hidden">Homepage</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/dashboard/addCourse'className={({ isActive }) =>`is-drawer-close:tooltip is-drawer-close:tooltip-right -ml-1 mt-2 ${isActive ? 'text-[#FAB12F]' : 'text-white' }` } data-tip="Add Course">
//             {/* Home icon */}
//             <MdLibraryAdd size={25}/>
//             <span className="is-drawer-close:hidden">Add Course</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/dashboard/myAddCourse'className={({ isActive }) =>`is-drawer-close:tooltip is-drawer-close:tooltip-right -ml-1 mt-2 ${isActive ? 'text-[#FAB12F]' : 'text-white' }` } data-tip="Home page">
//             {/* Home icon */}
//            <IoHomeSharp size={25} />
//             <span className="is-drawer-close:hidden">My Added Course</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/dashboard/myEnrollCourse'className={({ isActive }) =>`is-drawer-close:tooltip is-drawer-close:tooltip-right -ml-1 mt-2 ${isActive ? 'text-[#FAB12F]' : 'text-white' }` } data-tip="Home page">
//             {/* Home icon */}
//            <IoHomeSharp size={25} />
//             <span className="is-drawer-close:hidden">My Enroll Course</span>
//           </NavLink>
//         </li>      
//       </ul>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Dashboardlayout;


import React from 'react';
// import { IoHomeSharp } from 'react-icons/io5';
import { MdLibraryAdd, MdLibraryBooks } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router';
import logo from '../assets/logo.png'
import { HiViewBoards } from 'react-icons/hi';
import { FaBookReader } from 'react-icons/fa';

const Dashboardlayout = () => {
    return (
        <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto bg-base-200 ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-purple-900/20 dark:to-indigo-900/20 shadow-md sticky top-0 z-50">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost hover:bg-purple-200 dark:hover:bg-gray-700">
        <HiViewBoards size={25} className='text-purple-600 dark:text-purple-400'/>
      </label>
      <div className="flex-1 px-4">
        <img className='sm:w-40 w-28' src={logo} alt="Course Land Logo" />
      </div>
    </nav>
    
    {/* Page content */}
    <div className="min-h-screen ">
      <Outlet></Outlet>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible z-40">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-600 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 shadow-2xl is-drawer-close:w-16 is-drawer-open:w-64">
      
      {/* Sidebar Logo/Header */}
      <Link to='/' className="w-full p-4 is-drawer-close:p-2 border-b border-white/20">
        <div className="flex items-center justify-center is-drawer-close:justify-center">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
            <span className="text-2xl">📚</span>
          </div>
          <span className="ml-3 text-white font-bold text-lg is-drawer-close:hidden">Dashboard</span>
        </div>
      </Link>

      {/* Sidebar Menu */}
      <ul className="menu w-full grow p-2 space-y-2 mt-2">
      

        {/* Add Course */}
        <li>
          <NavLink 
            to='/dashboard/addCourse'
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right group rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-purple-600 shadow-lg font-semibold' 
                  : 'text-white hover:bg-white/10 hover:backdrop-blur-md'
              }`
            } 
            data-tip="Add Course"
          >
            <MdLibraryAdd size={22} className={`transition-transform group-hover:scale-110`} />
            <span className="is-drawer-close:hidden">Add Course</span>
          </NavLink>
        </li>

        {/* My Added Courses */}
        <li>
          <NavLink 
            to='/dashboard/myAddCourse'
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right group rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-purple-600 shadow-lg font-semibold' 
                  : 'text-white hover:bg-white/10 hover:backdrop-blur-md'
              }`
            } 
            data-tip="My Added Courses"
          >
            <MdLibraryBooks size={22} className={`transition-transform group-hover:scale-110`} />
            <span className="is-drawer-close:hidden">My Added Courses</span>
          </NavLink>
        </li>

        {/* My Enrolled Courses */}
        <li>
          <NavLink 
            to='/dashboard/myEnrollCourse'
            className={({ isActive }) =>
              `is-drawer-close:tooltip is-drawer-close:tooltip-right group rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-purple-600 shadow-lg font-semibold' 
                  : 'text-white hover:bg-white/10 hover:backdrop-blur-md'
              }`
            } 
            data-tip="My Enrolled Courses"
          >
            <FaBookReader size={22} className={`transition-transform group-hover:scale-110`} />
            <span className="is-drawer-close:hidden">My Enrolled Courses</span>
          </NavLink>
        </li>
      </ul>

      {/* Sidebar Footer */}
      <div className="w-full p-4 border-t border-white/20 is-drawer-close:hidden">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
          <p className="text-white text-xs font-medium mb-1">Need Help?</p>
          <p className="text-white/70 text-xs">Contact support for assistance</p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Dashboardlayout;