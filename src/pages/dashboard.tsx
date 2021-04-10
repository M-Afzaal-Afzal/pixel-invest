import React from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";
import Chart from "../components/Dashboard/Chart";
import Card from "../components/Cards/Card";
import {useAppSelector} from "../store/hooks";
import {selectBiggestAccounts} from "../store/biggestAccounts/biggestAccountsSlice";

const Dashboard: React.FC = () => {

    const biggestAccounts = useAppSelector(selectBiggestAccounts)

    console.log(biggestAccounts);

    // const [biggestAccounts, setBiggestAccounts] = useState<biggestAccountInterface[]>([]);

    // useEffect(() => {
    //     axios.get('https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-api/biggestAccounts')
    //         .then(res => {
    //             setBiggestAccounts(res.data);
    //
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         })
    //
    // }, []);


    return (
        <Box>
            {/*component for chart*/}
            <Box my={20} align={'center'}>
                <Box p={6} align={'center'} maxW={'50rem'} h={'30rem'}>
                    <Chart/>
                </Box>
            </Box>

            <Container maxW={'container.xl'}>
                <Stack spacing={8} mb={16}  alignItems={['center',null,'stretch']}
                       justify={'space-around'}
                       direction={['column', null, 'row', 'row']}>

                    <Card
                        heading={'Biggest Accounts'}
                        biggestAccounts={biggestAccounts}
                    />

                    <Card
                        heading={'My Account'}
                        myAccountInfo={{value: 22,pixels: 333,balance: 333}}
                    />

                </Stack>
            </Container>

        </Box>
    );
};

export default Dashboard;
