import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../page/Footer/Footer';

const RootLayOut = () => {
    return (
        <div>
             <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
                <NavBar></NavBar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
             </div>

        </div>
    );
};

export default RootLayOut;