import tradeInterface from "./tradeInterface";
import orderInterface from "./orderInterface";
import offerInterface from "./offerInterface";

interface userInterface {
    id: string;
    userName: string;
    email: string;
    pixels: number;
    balance: number;
    tradesHistory: tradeInterface[];
    orders: orderInterface[];
    offers: offerInterface[];
}

export default userInterface;