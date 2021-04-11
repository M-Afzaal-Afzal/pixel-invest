import React from 'react';
import {Box, Heading, OrderedList, VStack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import CardProps from "../../interfaces/cardProps";
import CListItem from "../ListItem/CListItem";
import {useAppSelector} from "../../store/hooks";
import {selectPixelValue} from "../../store/pixelValue/pixelValue";

const Card: React.FC<CardProps> = ({myAccountInfo,personalRanking, heading, biggestAccounts}) => {

    const pixelValue = useAppSelector(selectPixelValue);

    console.log(pixelValue)

    const totalEarnings = myAccountInfo?.tradesHistory.reduce((prevValue,curValue) => {
        return {
            sum:  prevValue.sum + curValue.sum
        }
    },{sum: 0});

    const totalTrades = myAccountInfo?.tradesHistory.reduce((prevValue,curValue) => {
        return {
            pixels:  prevValue.pixels + curValue.pixels
        }
    },{pixels: 0});


    return (
        <Box
            p={8}
            maxW={'30rem'}
            w={'100%'}
            rounded={'xl'}
            // boxShadow={'2xl'}
            boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
            bg={'brand.primary'}
            // bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
        >
            <Box>
                <Heading fontSize={'3xl'} align={'center'}>
                    {heading}
                </Heading>
            </Box>

            <VStack alignItems={'center'} align={'left'} mt={4}>
                {
                    personalRanking && (
                        <>
                            <OrderedList>
                                {
                                    personalRanking.map(({name, id, pixels}) => (
                                        <CListItem mt={'.5rem'}
                                                   key={id}>{name.toUpperCase()} : {pixels} PiXeL</CListItem>
                                    ))
                                }
                            </OrderedList>
                        </>
                    )
                }
                {
                    myAccountInfo && (
                        <>
                            {
                                myAccountInfo?.pixels && (
                                    <BodyText>Value : {pixelValue ? (myAccountInfo?.pixels * pixelValue) : "___"} €</BodyText>
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
                                myAccountInfo?.tradesHistory && (
                                    <BodyText>
                                        Total Trades : {totalTrades ? totalTrades?.pixels : '___'} €
                                    </BodyText>
                                )
                            }

                            {
                                myAccountInfo?.tradesHistory && (
                                    <BodyText>Total Earnings : {totalEarnings ? totalEarnings?.sum: '___'} €</BodyText>
                                )
                            }



                        </>
                    )
                }

                {
                    biggestAccounts && (
                        <>
                            <OrderedList>
                                {
                                    biggestAccounts.map(({name, id, pixels}) => (
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
