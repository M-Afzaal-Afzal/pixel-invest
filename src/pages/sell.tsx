import React from 'react';
import OrderOrOffer from "../components/OrderOrOffer/OrderOrOffer";

const Sell = () => {
    return (
        <OrderOrOffer data={
            [
                {id: 1,pixel: 444, limit: 111},
                {id: 2,pixel: 222, limit: 222}
            ]
        } order={false}/>
    );
};

export default Sell;
