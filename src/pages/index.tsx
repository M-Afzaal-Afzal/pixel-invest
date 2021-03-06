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

    const [selectedImageId, setSelectedImageId] = useState<null | number>(null);

    const {isOpen, onOpen, onClose} = useDisclosure()

    const closeHandler = () => {
        setSelectedImageId(null);
        onClose();
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

    const imageSrc = infoData.find(data => data.id === selectedImageId)?.photoURL;

    return (
        <Box bg={'brand.tertiary'} p={['2', '6', '12', '20']}>
            {/* Box Containing logo with title*/}
            {/*<Fade triggerOnce direction={'up'}>*/}
                <Box align={'center'} mb={8}>
                    <Pentagon/>
                </Box>
            {/*</Fade>*/}

            {/* Main body text which is centered*/}
            <Container maxW={'container.xl'}>

                <VStack my={16} spacing={16}>
                    <AnimateSharedLayout>
                        {
                            infoData.map(data => (
                                <Fade cascade direction={'up'} key={data.id} triggerOnce>
                                    <MotionBox mt={16}>
                                        <Info
                                            body={data.body}
                                            photoURL={data.photoURL}
                                            title={data.title}
                                            rightImage={data.rightImage}
                                            onClick={() => {
                                                setSelectedImageId(data.id)
                                                onOpen();
                                            }}
                                            layoutId={data.id}
                                        />
                                    </MotionBox>
                                 </Fade>
                            ))
                        }

                        <AnimatePresence>
                            {
                                selectedImageId && imageSrc && (
                                    <MotionBox>
                                        <Modal blockScrollOnMount size={'2xl'} isCentered isOpen={isOpen}
                                               onClose={onClose}>
                                            <ModalOverlay onClick={closeHandler}/>
                                            <ModalContent layoutId={selectedImageId} as={MotionBox} w={['28rem', '39rem']}
                                                          h={['', '17rem', '28rem']}>
                                                <ModalBody
                                                    bg={'brand.background'}
                                                    display={'flex'}
                                                    justifyContent={'center'}
                                                    p={0} alignItems={'center'}
                                                    align={'center'}
                                                    rounded={'lg'}
                                                >
                                                    <ModalCloseButton
                                                        bg={'brand.secondary'}
                                                        borderRadius={50}
                                                        _hover={{background: 'brand.tertiary'}}
                                                        _active={{background: 'brand.tertiary'}}
                                                        zIndex={99999} onClick={() => {
                                                        setSelectedImageId.bind(null);
                                                        onClose();
                                                    }} color={'white'}/>
                                                    <MotionBox animate={{scale: 1}} w={['25rem', '36rem']}
                                                               justifySelf={'center'} h={['14rem', '25rem']}
                                                               overflow={'hidden'}
                                                               position={'relative'}>
                                                        <Image src={imageSrc} layout={'fill'} objectFit={'cover'}/>
                                                    </MotionBox>
                                                </ModalBody>
                                            </ModalContent>

                                        </Modal>
                                    </MotionBox>
                                )
                            }
                        </AnimatePresence>
                    </AnimateSharedLayout>

                </VStack>

            </Container>


        </Box>
    )
}

export default Index
