import React from 'react';
import {Box, Container, Stack} from "@chakra-ui/react";
import Chart from "../components/Dashboard/Chart";
import Card from "../components/Dashboard/Card";

const Dashboard: React.FC = () => {
    return (
        <Box>
            {/*component for chart*/}
            <Box my={20} align={'center'}>
                <Box p={6} align={'center'} maxW={'50rem'} h={'30rem'}>
                    <Chart/>
                </Box>
            </Box>

            <Container maxW={'container.xl'}>
                <Stack spacing={8} mb={16} alignItems={'center'} justify={'space-around'} direction={['column',null,'row','row']}>

                    <Card
                        heading={'My Account'}
                        firstPoint={'one'}
                        secondPoint={'two'}
                        thirdPoint={'3rd'}
                        orderedList
                    />

                    <Card
                        heading={'My Account'}
                        firstPoint={'first'}
                        secondPoint={'second'}
                        thirdPoint={'third'}
                    />

                </Stack>
            </Container>

        </Box>
    );
};

export default Dashboard;
