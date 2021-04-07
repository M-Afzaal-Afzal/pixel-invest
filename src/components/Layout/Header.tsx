import React from 'react';
import {Container, Box, HStack, Flex, Heading} from "@chakra-ui/react";
import HeaderButton from "../Buttons/HeaderButton";

const Header: React.FC = () => {
    return (
        <Box p={'4'} bgGradient={'linear(to-b,blue.500,blue.300)'} boxShadow={'lg'}>
            <Container maxW={'container.xl'}>
                <Flex direction={'row'} justify={'space-between'}>
                    <Box>
                        <HStack>
                            <Box bg={'blue.500'} w={'40px'} h={'40px'}>
                            </Box>
                            <Heading fontSize={'lg'}>PiXel-Invest</Heading>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack spacing={4}>
                            <HeaderButton>Dashboard</HeaderButton>
                            <HeaderButton>Buy</HeaderButton>
                            <HeaderButton>Sell</HeaderButton>
                            <HeaderButton>Account</HeaderButton>
                        </HStack>
                    </Box>
                    <Box>
                        <HeaderButton>Logout</HeaderButton>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
