import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
