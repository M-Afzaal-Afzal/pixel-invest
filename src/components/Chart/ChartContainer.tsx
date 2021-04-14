import React, {useState} from 'react';
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {Fade} from "react-awesome-reveal";
import Chart from "./Chart";
import {Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";

const ChartContainer = () => {
    const MotionBox = motion(Box);
    const [selectedGraphId, setSelectedGraphId] = useState<null | number>(null);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const openHandler = () => {
        onOpen();
        setSelectedGraphId(1);
    }

    const closeHandler = () => {
        onClose();
        setSelectedGraphId(null);
    }

    return (
        <AnimateSharedLayout>

            {/*component for chart*/}
            <Fade triggerOnce direction={'up'}>
                <MotionBox onClick={openHandler}  align={'center'}>
                    <MotionBox animate={{scale: '1'}} transition={{type: 'linear'}} layoutId={1} p={6} align={'center'} maxW={'50rem'} h={'30rem'}>
                        <Chart/>
                    </MotionBox>
                </MotionBox>
            </Fade>

            <AnimatePresence>
                {
                    selectedGraphId && (
                        <MotionBox>
                            <Modal blockScrollOnMount size={'3xl'} isCentered isOpen={isOpen}
                                   onClose={onClose}
                            >
                                <ModalOverlay onClick={closeHandler}/>
                                <ModalContent w={['28rem','38rem','58rem']} layoutId={1} as={MotionBox}>
                                    <ModalBody
                                        bg={'brand.background'}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        align={'center'}
                                        rounded={'lg'}
                                    >
                                        <ModalCloseButton
                                            bg={'brand.secondary'}
                                            borderRadius={50}
                                            _hover={{background: 'brand.tertiary'}}
                                            _active={{background: 'brand.tertiary'}}
                                            zIndex={99999}
                                            onClick={() => {
                                                setSelectedGraphId(null);
                                                onClose();
                                            }} color={'white'}/>
                                        <MotionBox animate={{scale: '1'}} transition={{type: 'linear'}}>
                                            <Box p={6} align={'center'} w={['25rem','35rem','50rem']} h={['24rem','28rem','30rem']}>
                                                <Chart/>
                                            </Box>
                                        </MotionBox>
                                    </ModalBody>
                                </ModalContent>

                            </Modal>
                        </MotionBox>
                    )
                }
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export default ChartContainer;
