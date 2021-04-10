interface billInterface {
    user_id: string;
    timestamp: Date;
    pixels: number;
    pricePerPixel: number;
    sum: number;
    fee: number;
    paymentMethod: string;
}

export default billInterface;