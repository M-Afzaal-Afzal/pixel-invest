import React, {useEffect} from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Box} from '@chakra-ui/react'
import {useAppDispatch} from "../../store/hooks";
import {getOpenOrders} from "../../store/openOrders/openOrdersSlice";
import {getOpenOffers} from "../../store/openOffers/openOffersSlice";
import {getBiggestAccounts} from "../../store/biggestAccounts/biggestAccountsSlice";

// import {getCurrentUser} from "../../store/currentUser/currentUserSlice";

const Layout:React.FC= ({children}) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOpenOrders());
        dispatch(getOpenOffers());
        dispatch(getBiggestAccounts());
        // dispatch(getCurrentUser());
    }, []);


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
