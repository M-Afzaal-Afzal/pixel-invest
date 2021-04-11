import offerInterface from "./offerInterface";
import orderInterface from "./orderInterface";

interface CardOpenOOProps {
    data?: offerInterface[] | orderInterface[] | null;
    type: 'order' | 'offer';
}

export default CardOpenOOProps;