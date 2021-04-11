import React, {useEffect} from 'react';
import {
    Box,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, useDisclosure,
} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";


interface CErrorModal {
    error: boolean;
    children: string | null;
}

const CErrorModal: React.FC<CErrorModal> = ({children, error}) => {

    // const initialRef = React.useRef()
    // const finalRef = React.useRef()

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        if (error) {
            onOpen();
        }

    }, []);


    return (
        <Modal
            // initialFocusRef={initialRef}
            // finalFocusRef={finalRef}
            isCentered
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton color={'brand.primary'} borderRadius={'50%'}/>
                <ModalHeader>
                    <Box align={'center'}>
                        <Heading color={'red.300'}>ERROR</Heading>
                    </Box>
                </ModalHeader>
                <ModalBody pb={6}>
                    <BodyText color={'red.300'}>{children}</BodyText>
                </ModalBody>

            </ModalContent>
        </Modal>
    );
};

export default CErrorModal;
