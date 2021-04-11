import offerInterface from "./offerInterface";
import orderInterface from "./orderInterface";

interface orderOfferProps {
    data: orderInterface[] | offerInterface[] | null;
    type: 'order' | 'offer';
}

export default orderOfferProps;