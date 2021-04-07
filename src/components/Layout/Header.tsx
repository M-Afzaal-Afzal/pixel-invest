import React from 'react';
import {
    Container,
    Box,
    HStack,
    Flex,
    Heading,
    useMediaQuery,
    IconButton,
    useDisclosure, VStack, DrawerBody,
    Text,
    Drawer,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import HeaderButton from "../Buttons/HeaderButton";
import {HamburgerIcon} from "@chakra-ui/icons";
import DrawerButton from "../Buttons/DrawerButton";
import Link from "next/link";

const Header: React.FC = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [isLargerThan64em] = useMediaQuery("(min-width: 64em)")


    return (
        <Box p={'4'} bgGradient={'linear(to-b,brand.secondary,brand.primary)'} boxShadow={'lg'}>
            <Container maxW={'container.xl'}>
                <Flex direction={'row'} justify={'space-between'}>
                    <Box>
                        <HStack>
                            <Box bg={'brand.secondary'} w={'40px'} h={'40px'}>
                            </Box>
                            <Heading fontSize={'lg'}>PiXel-Invest</Heading>
                        </HStack>
                    </Box>
                    {
                        isLargerThan64em ? (
                            <>
                                <Box>
                                    <HStack spacing={4}>
                                        <HeaderButton>Dashboard</HeaderButton>
                                        <HeaderButton>Buy</HeaderButton>
                                        <HeaderButton>Sell</HeaderButton>
                                        <HeaderButton>Account</HeaderButton>
                                    </HStack>
                                </Box>
                                <Box>
                                    <Box as={Link} href={'/login'}>
                                        <HeaderButton>Login</HeaderButton>
                                    </Box>
                                </Box>
                            </>
                        ) : (
                            <IconButton onClick={onOpen} isRound colorScheme={'blue'} aria-label={'Navigation Icon'}>
                                <HamburgerIcon w={7} h={7}/>
                            </IconButton>
                        )
                    }

                </Flex>
                <Drawer placement={'left'} size={'xs'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerHeader
                                borderBottomWidth="1px"
                                color={'blue'}
                            >

                                <Heading color={'blue'}>Logo</Heading>
                                <DrawerCloseButton borderRadius={'50%'}/>

                            </DrawerHeader>
                            <DrawerBody>
                                <VStack mt={4} spacing={2}>
                                    <DrawerButton>Dashboard</DrawerButton>
                                    <DrawerButton>Buy</DrawerButton>
                                    <DrawerButton>Sell</DrawerButton>
                                    <DrawerButton>Account</DrawerButton>
                                </VStack>
                            </DrawerBody>
                            <DrawerFooter color={'brand.primary'} borderTopWidth={'1px'}>
                                <Box w={'100%'}>
                                    <Box as={Link} href={'/login'}>
                                        <Box onClick={onClose}>
                                            <DrawerButton>Login</DrawerButton>
                                        </Box>
                                    </Box>

                                    <Text mt={2} align={'right'} color={'brand.primary'}>
                                        Powered by PiXeL-invest UG
                                    </Text>
                                </Box>
                            </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Container>
        </Box>
    );
};

export default Header;
