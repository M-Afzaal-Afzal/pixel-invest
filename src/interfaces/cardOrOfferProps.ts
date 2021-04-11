interface orderOfferProps {
    data: {pixels: number,id: number,limit: number}[] | null;
    type: 'order' | 'offer';
}

export default orderOfferProps;