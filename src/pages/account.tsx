import React, {useEffect} from 'react';
import {Box, Container, Grid} from "@chakra-ui/react";
import CformInputCard from "../components/Form/CformInputCard";
import Card from "../components/Cards/Card";
import CInfoInputCard from "../components/Form/CInfoInputCard";
import {useAppSelector} from "../store/hooks";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";

const Account = () => {

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn?.userName) {
            router.replace('/login');
        }
    }, [isLoggedIn])

    return (
        <Box bg={'brand.background'}>

            <Container maxW={'container.xl'}>
                <Box mx={['2', '4', '8']} py={['2rem', '4rem', '6rem']}>
                    <Grid align={'center'} gridTemplateColumns={['1fr', null, null, '3fr 2fr']}
                          gridGap={[12, null, null, '2rem']}>

                        <Box>
                            <Box>
                                <CformInputCard options={['Paypal', 'Visa', 'Klarna']} type={'recharge'}/>
                            </Box>
                            <Box mt={16}>
                                <CformInputCard options={['Paypal', 'Visa', 'Klarna']} type={'withdraw'}/>
                            </Box>
                            <Box mt={16}>
                                <CInfoInputCard/>
                            </Box>

                        </Box>

                        <Box order={[-1, null, null, 0]}>
                            <Box top={['null', 'null', 'null', 20]} position={['relative', null, null, 'sticky']}>

                                <Box>
                                    <Card
                                        heading={'My Account'}
                                        myAccountInfo={{
                                            value: 22,
                                            pixels: 333,
                                            balance: 333,
                                            totalTrades: 3333,
                                            totalEarnings: 33333
                                        }}
                                    />
                                </Box>
                                {/*top={['null','null','null',490]}*/}
                                <Box position={['relative', null, null, 'sticky']} mt={12}>
                                    <Card heading={'Personal Ranking'}
                                          personalRanking={[{name: 'afzaal', id: 2, pixels: 333}, {
                                              name: 'afzaal',
                                              id: 22,
                                              pixels: 333
                                          }]}/>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Box>

            </Container>
        </Box>
    )
        ;
};

export default Account
