import React from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";

import CardOpenOO from "../Cards/CardOpenOO";
import Card from "../Cards/Card";
import orderOfferProps from "../../interfaces/cardOrOfferProps";
// import CformInputCard from "../Form/CformInputCard";
import {useAppSelector} from "../../store/hooks";
import {selectCurrentUser} from "../../store/currentUser/currentUserSlice";
import OfferInputCard from "../Form/OfferInputCard";
import OrderInputCard from "../Form/OrderInputCard";
import {Fade} from "react-awesome-reveal";
import ChartContainer from "../Chart/ChartContainer";

const OrderOrOfferPage: React.FC<orderOfferProps> = ({type, data}) => {


    const userAccountInfo = useAppSelector(selectCurrentUser);

    return (
        <Box w={'100%'} bg={'brand.background'}>

            <Box mx={['2', '4', '8']} py={['3rem', '4rem', '6rem']} align={'center'}>

                {
                    (type === 'offer') && (
                        <Fade triggerOnce cascade direction={'up'}>
                            <OfferInputCard options={['select', 'option 1', 'option 2']}/>
                        </Fade>
                    )
                }

                {
                    (type === 'order') && (
                        <Fade triggerOnce direction={'up'} cascade>
                            <OrderInputCard options={['select', 'option 1', 'option 2']}/>
                        </Fade>
                    )
                }

                {/*<CformInputCard options={} type={type}/>*/}

                <Container mt={20} maxW={'container.xl'}>


                        <Stack spacing={8} mb={16} justify={'space-around'}
                               alignItems={['center', null, 'stretch']}
                               direction={['column', null, 'row', 'row']}
                        >

                            <CardOpenOO data={data} type={type}/>
                            <Card
                                heading={'My Account'}
                                myAccountInfo={userAccountInfo}
                            />

                        </Stack>

                </Container>
                {/* so here is the chart container*/}
                <ChartContainer/>
            </Box>
        </Box>
    );
};

export default OrderOrOfferPage;
