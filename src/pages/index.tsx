import {
    Box, Container, VStack
} from '@chakra-ui/react'
import React from "react";
import Pentagon from "../components/Hero/Pentagon";
import Info from "../components/Hero/info";
import {Fade} from "react-awesome-reveal";


const Index: React.FC = () => (
    <Box bg={'brand.tertiary'} p={['2', '6', '12', '20']}>
        {/* Box Containing logo with title*/}
        <Fade triggerOnce direction={'up'}>
            <Box align={'center'} mb={8}>
                <Pentagon/>
            </Box>
        </Fade>

        {/* Main body text which is centered*/}
        <Container maxW={'container.xl'}>

            <VStack my={16} spacing={16}>
                <Fade cascade direction={'up'} triggerOnce>
                    <Box>
                        <Info
                            body={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.\n'}
                            photoURL={'/home/chart.png'}
                            title={'The modern art of investment'}
                            rightImage={true}
                        />
                    </Box>
                    <Box>
                        <Info
                            body={'                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.\n'}
                            photoURL={'/home/chart.png'}
                            title={'How does shit work?'}
                            rightImage={false}
                        />
                    </Box>
                    <Box>
                        <Info
                            body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.\n'}
                            photoURL={'/home/chart.png'}
                            title={'What makes us special and trustworthy'}
                            rightImage={true}
                        />
                    </Box>
                </Fade>
            </VStack>

        </Container>


    </Box>
)

export default Index
