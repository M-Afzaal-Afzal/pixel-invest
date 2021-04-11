import biggestAccountInterface from "./biggestAccountInterface";
import userInterface from "./userInterface";

interface CardProps {
    heading: string;

    biggestAccounts?: biggestAccountInterface[] | null;
    personalRanking?: { name: string; id: number; pixels: number }[] | null;
    myAccountInfo?: userInterface | null;
}


export default CardProps;