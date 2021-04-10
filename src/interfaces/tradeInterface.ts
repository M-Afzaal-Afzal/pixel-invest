interface tradeInterface {
    sellerUserId: string;
    buyerUserId: string;
    pixels: number;
    pricePerPixel: number;
    timestamp: Date;
    sum: number;
    fee: number;
}

export default tradeInterface;