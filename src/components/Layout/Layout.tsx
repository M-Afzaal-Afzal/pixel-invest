import React, {useEffect} from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Box} from '@chakra-ui/react'
import {useAppDispatch} from "../../store/hooks";
import {getOpenOrders} from "../../store/openOrders/openOrdersSlice";
import {getOpenOffers} from "../../store/openOffers/openOffersSlice";
import {getBiggestAccounts} from "../../store/biggestAccounts/biggestAccountsSlice";
// import {selectErrorMessageCU} from "../../store/currentUser/currentUserSlice";
import {getPixelValue} from "../../store/pixelValue/pixelValue";

// import {getCurrentUser} from "../../store/currentUser/currentUserSlice";

const Layout: React.FC = ({children}) => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getOpenOrders());
        dispatch(getOpenOffers());
        dispatch(getBiggestAccounts());
        dispatch(getPixelValue());
        // dispatch(getCurrentUser());

        // implementing the tawk.to

        // <!--Start of Tawk.to Script-->

        // const Tawk_API = Tawk_API || {},
        //     Tawk_LoadStart = new Date();
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

        // <!--End of Tawk.to Script-->

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
