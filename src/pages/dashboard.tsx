import React, {useEffect} from 'react';
import {
    Box,
    Container,
    Stack,
} from "@chakra-ui/react";
import Card from "../components/Cards/Card";
import {useAppSelector} from "../store/hooks";
import {selectBiggestAccounts} from "../store/biggestAccounts/biggestAccountsSlice";
import {selectCurrentUser} from "../store/currentUser/currentUserSlice";
import {useRouter} from "next/router";
import ChartContainer from "../components/Chart/ChartContainer";
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

            <ChartContainer/>

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
