import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../page/Footer/Footer';
import { Toaster } from "react-hot-toast";
const RootLayOut = () => {
    return (
        <div>
             <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
                <NavBar></NavBar>
                <div className='flex-1 '>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>





               <Toaster position="top-center" reverseOrder={false} />
       
                
             </div>



        </div>
    );
};

export default RootLayOut;