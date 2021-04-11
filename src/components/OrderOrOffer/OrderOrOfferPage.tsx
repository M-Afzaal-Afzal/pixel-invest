import React from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";

import CardOpenOO from "../Cards/CardOpenOO";
import Card from "../Cards/Card";
import Chart from "../Dashboard/Chart";
import orderOfferProps from "../../interfaces/cardOrOfferProps";
import CformInputCard from "../Form/CformInputCard";
import {useAppSelector} from "../../store/hooks";
import {selectCurrentUser} from "../../store/currentUser/currentUserSlice";

const OrderOrOfferPage: React.FC<orderOfferProps> = ({type,data}) => {



    // const {handleSubmit, errors, register} = useForm<Inputs>();
    //
    // const onSubmit = (data: Inputs) => {
    //     if (order) {
    //         // if it is order component then order logic goes here
    //         console.log('order component')
    //     console.log(data);
    //     } else {
    //         console.log('offer component')
    //         console.log(data)
    //         // if it is offer component then logic goes here
    //
    //     }
    // }
    //
    // const amountReg = register({
    //     required: 'Please enter amount',
    // })
    //
    // const selectReg = register({
    //     required: 'Please select one option'
    // })
    //
    // const dateReg = register({
    //     required: 'Please select Date',
    // })

    // {
    //     [
    //         {id: 1,pixel: 33, limit: 33},
    //         {id: 2,pixel: 33, limit: 333}
    //     ]
    // }

    const userAccountInfo = useAppSelector(selectCurrentUser);

    return (
        <Box w={'100%'} bg={'brand.background'}>

            <Box mx={['2', '4', '8']} py={['4rem', '6rem', '8rem']} align={'center'}>

               <CformInputCard options={['select','option 1','option 2']} type={type}/>

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
