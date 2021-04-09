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
            boxShadow={'2xl'}
            bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
        >
            <Box>
                <Heading fontSize={'3xl'} align={'center'}>
                    {heading}
                </Heading>
            </Box>

            {
                data?.map((value, index) => (
                    <Box>
                        <BodyText color={'yellow.300'} mt={2} fontWeight={'bold'}>
                            {type} Position: {index + 1}
                        </BodyText>
                        <BodyText>
                            PiXeL: {value.pixel}
                        </BodyText>
                        <BodyText>
                            Limit: {value.limit} €
                        </BodyText>
                    </Box>
                ))
            }

        </Box>

    );
};

export default CardOpenOO;
