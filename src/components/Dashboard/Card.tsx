import React from 'react';
import {Box, Heading, OrderedList, VStack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import CardProps from "../../interfaces/cardProps";
import CListItem from "../ListItem/CListItem";

const Card: React.FC<CardProps> = ({ myAccountInfo, heading, biggestAccounts}) => {
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

            <VStack align={'left'} mt={4}>
                {
                    !!myAccountInfo ? (
                        <>
                            <BodyText>Value : {myAccountInfo?.value} €</BodyText>
                            <BodyText>PiXeL : {myAccountInfo?.pixels}</BodyText>
                            <BodyText>Balance : {myAccountInfo?.balance} €</BodyText>

                        </>
                    ) : (
                        <>
                            <OrderedList>
                                {
                                    biggestAccounts?.map(({name, id, pixels}) => (
                                        <CListItem mt={'.5rem'}
                                                   key={id}>{name.toUpperCase()} : {pixels} PiXeL</CListItem>
                                    ))
                                }
                            </OrderedList>
                        </>
                    )
                }

            </VStack>
        </Box>
    );
}

export default Card
