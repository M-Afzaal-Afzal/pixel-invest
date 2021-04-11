import React, {useEffect} from 'react';
import OrderOrOfferPage from "../components/OrderOrOffer/OrderOrOfferPage";
import {useAppSelector} from "../store/hooks";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";
import {selectOpenOffers} from "../store/openOffers/openOffersSlice";

const Sell = () => {

    const router = useRouter();
    const isLoggedIn = useAppSelector(selectCurrentUser);

    const openOffers = useAppSelector(selectOpenOffers)

    useEffect(() => {
        if (!isLoggedIn?.userName) {
            router.replace('/login');
        }
    },[isLoggedIn])

    return (
        <OrderOrOfferPage data={openOffers} type={'offer'}/>
    );
};

export default Sell;
