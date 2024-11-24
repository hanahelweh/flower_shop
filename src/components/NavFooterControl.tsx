import React from 'react'
import { useLocation } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Footer from './Footer/Footer';

export default function NavFooterControl() {
    //hide footer and sideNav on checkout page
    const location = useLocation();
    const hideFooterRoutes = ['/checkout'];
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
    if(shouldHideFooter) return null;
    return (
        <>
            <SideNav />
            <Footer />
        </>
    )
}
