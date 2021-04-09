import React from 'react';

import OrderOrOfferPage from "../components/OrderOrOffer/OrderOrOfferPage";

const Buy = () => {
    return (
        <OrderOrOfferPage data={
            [
                {id: 1, pixel: 33, limit: 33},
                {id: 2, pixel: 33, limit: 333}
            ]
        } type={'order'}/>
    )
};

export default Buy;