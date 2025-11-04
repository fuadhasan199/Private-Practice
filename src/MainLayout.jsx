import React from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;