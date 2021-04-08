import React from 'react';

import OrderOrOffer from "../components/OrderOrOffer/OrderOrOffer";

const Buy = () => {
    return (
        <OrderOrOffer data={
                [
                    {id: 1,pixel: 33, limit: 33},
                    {id: 2,pixel: 33, limit: 333}
                ]
            } order/>
    )
};

export default Buy;