import React from 'react';
import {
    Box,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    HStack,
    IconButton,
    Text,
    useDisclosure,
    useMediaQuery,
    VStack,
} from "@chakra-ui/react";
import HeaderButton from "../Buttons/HeaderButton";
import {HamburgerIcon} from "@chakra-ui/icons";
import DrawerButton from "../Buttons/DrawerButton";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectCurrentUser, setUserLogout} from "../../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";

const Header: React.FC = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [isLargerThan64em] = useMediaQuery("(min-width: 64em)")

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const logoutHandler = () => {
        dispatch(setUserLogout());
        router.replace('/');

    }


    // const remoteApi = {
    //     biggestAccounts: [
    //         {
    //             "id": 1,
    //             "name": "peerstu",
    //             "pixels": 1039.038
    //         },
    //         {
    //             "id": 2,
    //             "name": "M Afzaal Afzal",
    //             "pixels": 739.028
    //         },
    //         {
    //             "id": 3,
    //             "name": "peerstu",
    //             "pixels": 289.018
    //         }
    //     ],
    //     myAccount: {
    //
    //         id: 'userId',
    //         username: 'Peerstu',
    //         email: 'peerstu@gmail.com',
    //         password: 'password',
    //         paymentMethod: 'paypal',
    //         balance: 9999,
    //         pixels: 1000,
    //         tradesHistory: [
    //             {
    //                 sellerUserId: '3fsd',
    //                 buyerUserId: '3322',
    //                 pixels: 2423,
    //                 pricePerPixel: 333,
    //                 timestamp: 'dummy',
    //                 sum: 23232,
    //                 fee: 3333
    //             }, {
    //                 sellerUserId: '3fsd',
    //                 buyerUserId: '3322',
    //                 pixels: 2423,
    //                 pricePerPixel: 333,
    //                 timestamp: 'dummy',
    //                 sum: 23232,
    //                 fee: 3333
    //             }, {
    //                 sellerUserId: '3fsd',
    //                 buyerUserId: '3322',
    //                 pixels: 2423,
    //                 pricePerPixel: 333,
    //                 timestamp: 'dummy',
    //                 sum: 23232,
    //                 fee: 3333
    //             },
    //         ],
    //         orders: [
    //             {
    //                 userID: 'fsfds',
    //                 orderType: '',
    //                 orderLimit: 88,
    //                 amount: 234,
    //                 validUntil: '2021-06-16'
    //             }, {
    //                 userID: 'khkfsfsjhkjh',
    //                 orderType: '',
    //                 orderLimit: 342,
    //                 amount: 242,
    //                 validUntil: '2021-06-16'
    //             }, {
    //                 userID: 'ksfshkjhkjh',
    //                 orderType: '',
    //                 orderLimit: 3545,
    //                 amount: 2342,
    //                 validUntil: '2021-06-16'
    //             },],
    //         offers: [
    //             [
    //                 {
    //                     userID: '123',
    //                     offerType: 'dummy',
    //                     offerLimit: 444,
    //                     amount: 333,
    //                     validUntil: '2021-06-16'
    //                 }, {
    //                 userID: '12ada3',
    //                 offerType: 'dummy',
    //                 offerLimit: 232,
    //                 amount: 111,
    //                 validUntil: '2021-06-16'
    //             }, {
    //                 userID: '12DD3',
    //                 offerType: 'dummy',
    //                 offerLimit: 1117,
    //                 amount: 888,
    //                 validUntil: '2021-06-16'
    //             },
    //             ],
    //         ],
    //     },
    //     openOffers: [
    //         {
    //             userID: '123',
    //             offerType: 'dummy',
    //             offerLimit: 444,
    //             amount: 333,
    //             validUntil: '2021-06-16'
    //         }, {
    //             userID: '1dd23',
    //             offerType: 'dummy',
    //             offerLimit: 232,
    //             amount: 111,
    //             validUntil: '2021-06-16'
    //         }, {
    //             userID: '1sd23',
    //             offerType: 'dummy',
    //             offerLimit: 1117,
    //             amount: 888,
    //             validUntil: '2021-06-16'
    //         },
    //     ],
    //     openOrders: [
    //         {
    //             userID: '23sd23',
    //             orderType: 'dummy',
    //             orderLimit: 888,
    //             amount: 788,
    //             validUntil: '2021-06-16',
    //         }, {
    //             userID: '2ds323',
    //             orderType: 'dummy',
    //             orderLimit: 888,
    //             amount: 788,
    //             validUntil: '2021-06-16',
    //         }, {
    //             userID: '2323',
    //             orderType: 'dummy',
    //             orderLimit: 888,
    //             amount: 788,
    //             validUntil: '2021-06-16',
    //         },
    //     ],
    //     pixel: {
    //         value: 100
    //     },
    // }

    return (
        <Box position={'fixed'} top={0} width={'100%'} zIndex={20} left={0} p={'4'}
             bgGradient={'linear(to-b,brand.secondary,brand.primary)'} boxShadow={'lg'}>
            <Container maxW={'container.xl'}>
                <Flex alignItems={'center'} direction={'row'} justify={'space-between'}>
                    <Box>
                        <Box as={Link} href={'/'}>
                            <HStack>
                                <Box _hover={{cursor: 'pointer'}} bg={'brand.secondary'} w={'40px'} h={'40px'}>
                                </Box>
                                <Heading _hover={{cursor: 'pointer'}} fontSize={'lg'}>PiXel-Invest</Heading>
                            </HStack>
                        </Box>
                    </Box>
                    {
                        isLargerThan64em ? (
                            <>
                                <Box>
                                    <HStack spacing={4}>
                                        {
                                            isLoggedIn ? (
                                                <>
                                                    <Box as={Link} href={'/dashboard'}>
                                                        <Box>
                                                            <HeaderButton>Dashboard</HeaderButton>
                                                        </Box>
                                                    </Box>
                                                    <Box as={Link} href={'/buy'}>
                                                        <HeaderButton>Buy</HeaderButton>
                                                    </Box>
                                                    <Box as={Link} href={'/sell'}>
                                                        <HeaderButton>Sell</HeaderButton>
                                                    </Box>
                                                    <Box as={Link} href={'/account'}>
                                                        <HeaderButton>Account</HeaderButton>
                                                    </Box>
                                                </>

                                            ) : (
                                                <Box justifyContent={'center'} align={'center'} display={'flex'}
                                                     alignItems={'center'} m={'auto'}>
                                                    <Heading fontSize={'1.5rem'} color={'white'}>Login To Buy Or
                                                        Sell</Heading>
                                                </Box>
                                            )
                                        }

                                    </HStack>
                                </Box>
                                <Box>
                                    {
                                        isLoggedIn ? (
                                            <Box onClick={logoutHandler}>
                                                <HeaderButton>Logout</HeaderButton>
                                            </Box>
                                        ) : (
                                            <Box as={Link} href={'/login'}>
                                                <HeaderButton>Login</HeaderButton>
                                            </Box>
                                        )
                                    }

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
                                {
                                    isLoggedIn ? (
                                        <VStack mt={4} spacing={2}>
                                            <Box width={'100%'} onClick={onClose}>
                                                <Box as={Link} href={'/'}>
                                                    <DrawerButton>Dashboard</DrawerButton>
                                                </Box>
                                            </Box>
                                            <Box width={'100%'} onClick={onClose}>
                                                <Box as={Link} href={'/buy'}>
                                                    <DrawerButton>Buy</DrawerButton>
                                                </Box>
                                            </Box>
                                            <Box width={'100%'} onClick={onClose}>
                                                <Box as={Link} href={'/sell'}>
                                                    <DrawerButton>Sell</DrawerButton>
                                                </Box>
                                            </Box>
                                            <Box width={'100%'} onClick={onClose}>
                                                <Box as={Link} href={'/account'}>
                                                    <DrawerButton>Account</DrawerButton>
                                                </Box>
                                            </Box>
                                        </VStack>
                                    ) : (
                                        <Box h={'100%'} justifyContent={'center'} display={'flex'} alignItems={'center'}
                                             m={'auto'}>
                                            <Heading fontSize={'1.5rem'} color={'brand.primary'}>Login To Buy Or
                                                Sell</Heading>
                                        </Box>
                                    )
                                }

                            </DrawerBody>
                            <DrawerFooter color={'brand.primary'} borderTopWidth={'1px'}>
                                <Box w={'100%'}>
                                    {
                                        isLoggedIn ? (
                                            <Box onClick={logoutHandler}>
                                                <Box onClick={onClose}>
                                                    <DrawerButton>Logout</DrawerButton>
                                                </Box>
                                            </Box>
                                        ) : (
                                            <Box as={Link} href={'/login'}>
                                                <Box onClick={onClose}>
                                                    <DrawerButton>Login</DrawerButton>
                                                </Box>
                                            </Box>
                                        )
                                    }


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
