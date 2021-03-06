import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import cardOpenOOProps from '../../interfaces/cardOpenOOProps'
// OO for offer and order


const CardOpenOO: React.FC<cardOpenOOProps> = ({type, data}) => {

    let heading: string;

    switch (type) {
        case 'order':
            heading = 'Open Orders';
            break;
        case 'offer':
            heading = 'Open Offers';
    }

    return (

        <Box
            p={8}
            maxW={'30rem'}
            w={'100%'}
            rounded={'xl'}
            boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
            // bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
            bg={'brand.primary'}
        >
            <Box>
                <Heading fontSize={'3xl'} align={'center'}>
                    {heading}
                </Heading>
            </Box>

            {
                //@ts-ignore
                data && data.map((value, index) => (
                    <Box key={index}>
                        <BodyText color={'yellow.300'} mt={2} fontWeight={'bold'}>
                            {type} Position: {index + 1}
                        </BodyText>
                        <BodyText>
                            PiXeL: {value.amount}
                        </BodyText>
                        <BodyText>
                            Limit: {type==='order' ? value.orderLimit : value.offerLimit} €
                        </BodyText>
                    </Box>
                ))
            }

        </Box>

    );
};

export default CardOpenOO;
