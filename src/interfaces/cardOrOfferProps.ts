import orderInterface from './orderInterface';

interface orderOfferProps {
    data: orderInterface[];
    type: 'order' | 'offer';
}

export default orderOfferProps;