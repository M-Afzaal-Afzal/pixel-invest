import React from 'react';
import {useForm} from "react-hook-form";
import {Box, Button, Container, FormControl, FormLabel, Heading, Stack} from "@chakra-ui/react";
import CInput from "../Form/CInput";
import CFormErrorMessage from "../Form/CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import CardOpenOO from "../Cards/CardOpenOO";
import Card from "../Cards/Card";
import Chart from "../Dashboard/Chart";
import orderOfferProps from "../../interfaces/cardOrOfferProps";

type Inputs = {
    amount: string;
    For: string;
    validUntil: Date;
}


const OrderOrOffer: React.FC<orderOfferProps> = ({order,data}) => {
    const {handleSubmit, errors, register} = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        if (order) {
            // if it is order component then order logic goes here
            console.log('order component')
        console.log(data);
        } else {
            console.log('offer component')
            console.log(data)
            // if it is offer component then logic goes here

        }
    }

    const amountReg = register({
        required: 'Please enter amount',
    })

    const selectReg = register({
        required: 'Please select one option'
    })

    const dateReg = register({
        required: 'Please select Date',
    })

    // {
    //     [
    //         {id: 1,pixel: 33, limit: 33},
    //         {id: 2,pixel: 33, limit: 333}
    //     ]
    // }

    return (
        <Box w={'100%'} bg={'brand.black'}>

            <Box mx={['2', '4', '8']} py={['4rem', '6rem', '8rem']} align={'center'}>

                <Box p={['8', '16', '24']}
                     pt={['4', '8', '12']}
                     maxW={'40rem'}
                     rounded={'lg'}
                     bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
                >
                    <Heading mb={['4', '8', '12']}>
                        {order ? 'Create Order' : 'Create Offer'}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={!!errors?.amount}>
                            <FormLabel htmlFor="amount">Amount</FormLabel>
                            <CInput
                                placeholder="Amount"
                                name={'amount'}
                                ref={amountReg}
                                type={'number'}
                            />
                            <CFormErrorMessage>
                                {errors?.amount && errors.amount.message}
                            </CFormErrorMessage>
                        </FormControl>

                        <FormControl mt={4} id="selectFor">
                            <FormLabel>For</FormLabel>
                            <CSelect
                                name={'for'}
                                placeholder="Select"
                                ref={selectReg}
                            >
                                <option>Best</option>
                                <option>item 1</option>
                                <option>item 2</option>
                            </CSelect>
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors?.validUntil}>
                            <FormLabel htmlFor="validUntil">Valid Until</FormLabel>
                            <CInput
                                placeholder="Valid Until"
                                name={'validUntil'}
                                ref={dateReg}
                                type={'date'}
                            />
                            <CFormErrorMessage>
                                {errors?.validUntil && errors.validUntil.message}
                            </CFormErrorMessage>
                        </FormControl>
                        <Box mt={8}>
                            <BodyText>
                                1920 PiXeLs for 1542,23 €
                            </BodyText>
                        </Box>
                        <Button mt={8} colorScheme="blue" type="submit">
                            {order ? 'Create Order' : 'Create Offer'}
                        </Button>
                    </form>
                </Box>

                <Container mt={20} maxW={'container.xl'}>
                    <Stack spacing={8} mb={16} justify={'space-around'}
                           alignItems={['center', null, 'stretch']}
                           direction={['column', null, 'row', 'row']}
                    >

                        <CardOpenOO
                            heading={order ? 'Open Orders' : 'Open Offers'}
                            data={data}

                        />

                        <Card
                            heading={'My Account'}
                            myAccountInfo={{value: 22, pixels: 333, balance: 333}}
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

export default OrderOrOffer;
