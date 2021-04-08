import React from 'react';
import {Box, Heading, OrderedList, VStack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import CardProps from "../../interfaces/cardProps";
import CListItem from "../ListItem/CListItem";

const Card: React.FC<CardProps> = ({orderedList, heading, firstPoint, secondPoint, thirdPoint}) => {
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
                    orderedList ? (
                        <>
                            <BodyText>{firstPoint}</BodyText>
                            <BodyText>{secondPoint}</BodyText>
                            <BodyText>{thirdPoint}</BodyText>
                        </>
                    ) : (
                        <>
                            <OrderedList>
                                <CListItem>{firstPoint}</CListItem>
                                <CListItem mt={'.5rem'}>{secondPoint}</CListItem>
                                <CListItem mt={'.5rem'}>{thirdPoint}</CListItem>
                            </OrderedList>
                        </>
                    )
                }

            </VStack>
        </Box>
    );
}

export default Card;
