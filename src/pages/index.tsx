import {
    Box, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, VStack
} from '@chakra-ui/react'
import React, {useState} from "react";
import Pentagon from "../components/Hero/Pentagon";
import Info from "../components/Hero/info";
import {Fade} from "react-awesome-reveal";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import Image from 'next/image';


const Index: React.FC = () => {

    const [selectedId, setSelectedId] = useState<null | number>(null);

    const {isOpen, onOpen, onClose} = useDisclosure()

    const closeHandler = () => {
        onClose();
        setSelectedId(null);
    }


    const MotionBox = motion(Box);

    const infoData = [
        {
            id: 1,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.',
            photoURL: '/home/chart.png',
            title: 'The modern art of investment',
            rightImage: true,
        }, {
            id: 2,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.',
            photoURL: '/home/chart.png',
            title: 'How does shit work?',
            rightImage: false,
        }, {
            id: 3,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.',
            photoURL: '/home/chart.png',
            title: 'What makes us special and trustworthy?',
            rightImage: true,
        },
    ]

    const imageSrc = infoData.find(data => data.id === selectedId)?.photoURL;

    return (
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
                        <AnimateSharedLayout>
                            {
                                infoData.map(data => (
                                    <MotionBox key={data.id} >
                                        <Info
                                            body={data.body}
                                            photoURL={data.photoURL}
                                            title={data.title}
                                            rightImage={data.rightImage}
                                            onClick={() => {
                                                setSelectedId(data.id)
                                                onOpen();
                                            }}
                                            layoutId={data.id}
                                        />
                                    </MotionBox>
                                ))
                            }

                            <AnimatePresence>
                                {
                                    selectedId && imageSrc && (
                                        <MotionBox>
                                            <Modal size={'2xl'} isCentered isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay onClick={closeHandler}/>
                                                <ModalContent>
                                                    <ModalBody align={'center'}>
                                                        <ModalCloseButton onClick={() => {
                                                            setSelectedId.bind(null);
                                                            onClose();
                                                        }} color={'brand.primary'}/>
                                                        <MotionBox layoutId={selectedId} animation={{scale: 1}} w={'36rem'}
                                                                   justifySelf={'center'} h={'25rem'}
                                                                   overflow={'hidden'}
                                                                   position={'relative'}>
                                                            <Image src={imageSrc} layout={'fill'} objectFit={'cover'}/>
                                                        </MotionBox>
                                                    </ModalBody>
                                                </ModalContent>

                                            </Modal>
                                        </MotionBox>

                                        //
                                        //     <Box w={'16rem'} justifySelf={'center'} h={'11rem'} overflow={'hidden'}
                                        //          position={'relative'}>
                                        //         <Image src={imageSrc} layout={'fill'} objectFit={'cover'}/>
                                        //         <CloseButton/>
                                        //     </Box>
                                        // </MotionBox>
                                    )
                                }
                            </AnimatePresence>
                        </AnimateSharedLayout>

                        {/*<Box>*/}
                        {/*    <Info*/}
                        {/*        body={'                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.\n'}*/}
                        {/*        photoURL={'/home/chart.png'}*/}
                        {/*        title={''}*/}
                        {/*        rightImage={false}*/}
                        {/*    />*/}
                        {/*</Box>*/}
                        {/*<Box>*/}
                        {/*    <Info*/}
                        {/*        body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem fuga illo in iste magni, maxime nesciunt nihil nisi obcaecati omnis optio perspiciatis, quas repellat saepe, sint velit voluptas voluptates.\n'}*/}
                        {/*        photoURL={'/home/chart.png'}*/}
                        {/*        title={''}*/}
                        {/*        rightImage={true}*/}
                        {/*    />*/}
                        {/*</Box>*/}
                    </Fade>
                </VStack>

            </Container>


        </Box>
    )
}

export default Index
