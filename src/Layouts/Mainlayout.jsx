import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';

const Mainlayout = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;