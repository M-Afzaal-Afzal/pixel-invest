import React, {useEffect} from 'react';

import OrderOrOfferPage from "../components/OrderOrOffer/OrderOrOfferPage";
import {useAppSelector} from "../store/hooks";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";
import {selectOpenOrders} from "../store/openOrders/openOrdersSlice";

const Buy = () => {

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const router = useRouter();

    const openOrders = useAppSelector(selectOpenOrders);

    useEffect(() => {
        if (!isLoggedIn?.userName) {
            router.replace('/login');
        }
    },[isLoggedIn])

    return (
        <OrderOrOfferPage data={openOrders} type={'order'}/>
    )
};

export default Buy;