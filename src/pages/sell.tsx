import React from 'react';
import OrderOrOfferPage from "../components/OrderOrOffer/OrderOrOfferPage";

const Sell = () => {
    return (
        <OrderOrOfferPage data={
            [
                {id: 1,pixel: 444, limit: 111},
                {id: 2,pixel: 222, limit: 222}
            ]
        } type={'offer'}/>
    );
};

export default Sell;
