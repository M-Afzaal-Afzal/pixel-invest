import biggestAccountInterface from "./biggestAccountInterface";

interface CardProps {
    heading: string;

    biggestAccounts?: biggestAccountInterface[] | null;
    personalRanking?: { name: string; id: number; pixels: number }[] | null;

    myAccountInfo?: {
        value: number;
        pixels: number;
        balance: number,
        totalTrades?: number;
        totalEarnings?: number;
    };
}


export default CardProps;