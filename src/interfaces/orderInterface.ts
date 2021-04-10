interface orderInterface {
    userId: string;
    orderType: string;
    orderLimit: number;
    amount: number;
    validUntil: Date;
}

export default orderInterface;