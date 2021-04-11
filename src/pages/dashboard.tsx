import React, {useEffect} from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";
import Chart from "../components/Dashboard/Chart";
import Card from "../components/Cards/Card";
import {useAppSelector} from "../store/hooks";
import {selectBiggestAccounts} from "../store/biggestAccounts/biggestAccountsSlice";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";
import {Fade} from "react-awesome-reveal";

const Dashboard: React.FC = () => {

    const biggestAccounts = useAppSelector(selectBiggestAccounts)
    const userAccountInfo = useAppSelector(selectCurrentUser);

    console.log(biggestAccounts);

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn?.userName) {
            router.replace('/login');
        }
    }, [isLoggedIn])


    return (
        <Box bg={'brand.background'} py={20}>
            {/*component for chart*/}
            <Box align={'center'}>
                <Fade triggerOnce direction={'up'}>
                    <Box p={6} align={'center'} maxW={'50rem'} h={'30rem'}>
                        <Chart/>
                    </Box>
                </Fade>
            </Box>

            <Container maxW={'container.xl'}>

                    <Stack spacing={8} alignItems={['center', null, 'stretch']}
                           justify={'space-around'}
                           direction={['column', null, 'row', 'row']}>

                        <Card
                            heading={'Biggest Accounts'}
                            biggestAccounts={biggestAccounts}
                        />

                        <Card
                            heading={'My Account'}
                            myAccountInfo={userAccountInfo}
                        />

                    </Stack>

            </Container>

        </Box>
    );
};

export default Dashboard;
