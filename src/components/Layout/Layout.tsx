import React, {useEffect} from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Box, useToast} from '@chakra-ui/react'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getOpenOrders} from "../../store/openOrders/openOrdersSlice";
import {getOpenOffers} from "../../store/openOffers/openOffersSlice";
import {getBiggestAccounts} from "../../store/biggestAccounts/biggestAccountsSlice";
import {selectErrorMessageCU} from "../../store/currentUser/currentUserSlice";
import {getPixelValue} from "../../store/pixelValue/pixelValue";

// import {getCurrentUser} from "../../store/currentUser/currentUserSlice";

const Layout:React.FC= ({children}) => {

    const dispatch = useAppDispatch();
    const toast = useToast();


    const loginErrorMessage = useAppSelector(selectErrorMessageCU);

    useEffect(() => {
        dispatch(getOpenOrders());
        dispatch(getOpenOffers());
        dispatch(getBiggestAccounts());
        dispatch(getPixelValue());
        // dispatch(getCurrentUser());

        // toast if loading error while signin
        if (loginErrorMessage) {
             toast({
                title: loginErrorMessage,
                status: 'error',
                isClosable: true,
            })
        }
    }, [loginErrorMessage]);


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
