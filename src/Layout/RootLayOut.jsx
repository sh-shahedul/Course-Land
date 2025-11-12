import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../page/Footer/Footer';
import { Toaster } from "react-hot-toast";
import Loading from '../Components/Loading/Loading';
const RootLayOut = () => {
    const navigation = useNavigation()
    return (
        <div>
             <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto bg-base-200'>


                
                <NavBar></NavBar>
                <div className='flex-1  '>
                    {
                    navigation?.state  === 'loading' ? <Loading></Loading> :<Outlet></Outlet>
                    }
                </div>
                <Footer></Footer>





               <Toaster position="top-center" reverseOrder={false} />
       
                
             </div>



        </div>
    );
};

export default RootLayOut;