import React, {useEffect} from 'react';
import {Box, Container, Grid} from "@chakra-ui/react";
// import CformInputCard from "../components/Form/CformInputCard";
import Card from "../components/Cards/Card";
import CInfoInputCard from "../components/Form/CInfoInputCard";
import {useAppSelector} from "../store/hooks";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";
import RechargeInputCard from "../components/Form/RechargeInputCard";
import WithdrawInputCard from "../components/Form/WithdrawInputCard";
import {Fade} from "react-awesome-reveal";

const Account = () => {

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const router = useRouter();
    const userAccountInfo = useAppSelector(selectCurrentUser);

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
                            <Fade cascade key={1} triggerOnce direction={'up'}>
                                <Box>
                                    <RechargeInputCard options={['Paypal', 'Visa', 'Klarna']}/>
                                    {/* first i was using the same component for recharge, withdraw and create order and offer.*/}
                                    {/* But it was adding too much complexity and making code to manage a bit harder. So i seperate them into seperate components*/}
                                    {/*<CformInputCard options={} type={'recharge'}/>*/}
                                </Box>
                            </Fade>
                                <Box mt={16}>
                                    <WithdrawInputCard options={['Paypal', 'Visa', 'Klarna']}/>
                                </Box>
                                <Box mt={16}>
                                    <CInfoInputCard/>
                                </Box>

                        </Box>

                        <Box order={[-1, null, null, 0]}>
                            <Box top={['null', 'null', 'null', 20]} position={['relative', null, null, 'sticky']}>
                                <Box>
                                    <Fade key={2} triggerOnce delay={400} direction={'up'}>
                                        <Card
                                            heading={'My Account'}
                                            myAccountInfo={userAccountInfo}
                                        />
                                    </Fade>
                                </Box>
                                {/*top={['null','null','null',490]}*/}
                                <Box position={['relative', null, null, 'sticky']} mt={12}>
                                    <Fade key={3} triggerOnce delay={700} direction={'up'}>
                                        <Card heading={'Personal Ranking'}
                                              personalRanking={[{name: 'afzaal', id: 2, pixels: 333}, {
                                                  name: 'afzaal',
                                                  id: 22,
                                                  pixels: 333
                                              }]}/>
                                    </Fade>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Box>

            </Container>
        </Box>
    )
};

export default Account
