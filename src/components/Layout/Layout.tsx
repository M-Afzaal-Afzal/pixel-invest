import React, {useEffect} from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Box} from '@chakra-ui/react'
import {useAppDispatch} from "../../store/hooks";

import {getBiggestAccounts,getOpenOrders,getOpenOffers,getPixelValue} from '../../services/api';

const Layout: React.FC = ({children}) => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getOpenOrders());
        dispatch(getOpenOffers());
        dispatch(getBiggestAccounts());
        dispatch(getPixelValue());
        // dispatch(getCurrentUser());

        // implementing the tawk.to

        (function () {
            const s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6075354b067c2605c0c1d567/1f34tgcfq';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');

            // @ts-ignore
            s0.parentNode.insertBefore(s1, s0);
        })();
        // end of the tawk.to script

    }, []);


    return (
        <>
            <Header/>
            <Box h={'70px'}/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
