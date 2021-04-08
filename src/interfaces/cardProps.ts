interface CardProps {
    heading: string;
    biggestAccounts?: { name: string; id: number; pixels: number }[];
    myAccountInfo?: {
        value: number;
        pixels: number;
        balance: number,
        totalTrades?: number;
        totalEarnings?: number;
    };
}


export default CardProps;