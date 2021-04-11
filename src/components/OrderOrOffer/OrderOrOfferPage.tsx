import React from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";

import CardOpenOO from "../Cards/CardOpenOO";
import Card from "../Cards/Card";
import Chart from "../Dashboard/Chart";
import orderOfferProps from "../../interfaces/cardOrOfferProps";
// import CformInputCard from "../Form/CformInputCard";
import {useAppSelector} from "../../store/hooks";
import {selectCurrentUser} from "../../store/currentUser/currentUserSlice";
import OfferInputCard from "../Form/OfferInputCard";
import OrderInputCard from "../Form/OrderInputCard";

const OrderOrOfferPage: React.FC<orderOfferProps> = ({type,data}) => {


    const userAccountInfo = useAppSelector(selectCurrentUser);

    return (
        <Box w={'100%'} bg={'brand.background'}>

            <Box mx={['2', '4', '8']} py={['4rem', '6rem', '8rem']} align={'center'}>

                {
                    (type === 'offer') && (
                        <OfferInputCard options={['select','option 1','option 2']}/>
                    )
                }

                {
                    (type === 'order') && (
                        <OrderInputCard options={['select','option 1','option 2']}/>
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
                <Box my={20} align={'center'}>
                    <Box p={6} align={'center'} maxW={'50rem'} h={'30rem'}>
                        <Chart/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OrderOrOfferPage;
