import React from 'react';
import {Box, Heading, OrderedList, VStack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import CardProps from "../../interfaces/cardProps";
import CListItem from "../ListItem/CListItem";

const Card: React.FC<CardProps> = ({myAccountInfo,personalRanking, heading, biggestAccounts}) => {

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

            <VStack alignItems={'center'} align={'left'} mt={4}>
                {
                    !!personalRanking && (
                        <>
                            <OrderedList>
                                {
                                    personalRanking?.map(({name, id, pixels}) => (
                                        <CListItem mt={'.5rem'}
                                                   key={id}>{name.toUpperCase()} : {pixels} PiXeL</CListItem>
                                    ))
                                }
                            </OrderedList>
                        </>
                    ) ||
                    !!myAccountInfo && (
                        <>
                            {
                                myAccountInfo?.value && (
                                    <BodyText>Value : {myAccountInfo?.value} €</BodyText>
                                )
                            }

                            {
                                myAccountInfo?.pixels && (
                                    <BodyText>PiXeL : {myAccountInfo?.pixels}</BodyText>
                                )
                            }

                            {
                                myAccountInfo?.balance && (
                                    <BodyText>Balance : {myAccountInfo?.balance} €</BodyText>
                                )
                            }

                            {
                                myAccountInfo?.totalTrades && (
                                    <BodyText>Balance : {myAccountInfo?.totalTrades} €</BodyText>
                                )
                            }

                            {
                                myAccountInfo?.totalEarnings && (
                                    <BodyText>Balance : {myAccountInfo?.totalEarnings} €</BodyText>
                                )
                            }



                        </>
                    ) ||  !!biggestAccounts && (
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
