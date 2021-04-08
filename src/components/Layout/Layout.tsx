import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Box} from '@chakra-ui/react'

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Header/>
            <Box h={'70px'}></Box>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
