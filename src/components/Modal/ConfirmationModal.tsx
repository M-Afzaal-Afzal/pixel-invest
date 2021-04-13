import React from 'react';
import {
    Box,
    Divider,
    Heading, HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalProps
} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import ButtonPrimary from "../Buttons/ButtonPrimary";

type onSubmit = (data: any) => void;

interface ConfirmationModalProps extends ModalProps {
    heading: string;
    onSubmit: onSubmit;
    makeFromRejected: () => void;
    handleSubmit: (onSubmit: onSubmit) => (e: any) => void;
    onClose: () => void;
    isOpen: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps>
    = ({
         handleSubmit,
         onSubmit,
         heading,
         onClose,
         makeFromRejected,
         isOpen,
         children
     }) => {


        const orderCancelHandler = () => {
            makeFromRejected();
            onClose();
        }

        const orderConfirmationHandler = (e: any) => {
            // after performing the actual work we've to set the isConfirmed to false
            // if user want to make another transaction it would must be validated again
            handleSubmit(onSubmit)(e);
            makeFromRejected();
            onClose();
        }

        return (
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        <Heading align={'center'} fontSize={'2xl'} color={'brand.primary'}>
                            {heading}
                        </Heading>
                    </ModalHeader>
                    <Divider/>
                    <ModalCloseButton/>
                    <ModalBody>
                        <BodyText color={'brand.primary'}>
                            {
                                children
                            }
                        </BodyText>
                    </ModalBody>
                    <Divider/>
                    <ModalFooter>
                        <Box width={'100%'} align={'center'}>
                            <HStack justify={'center'}>
                                <ButtonSecondary onClick={(e) => {orderConfirmationHandler(e)} } type={"submit"} mr={3}>
                                    Sure
                                </ButtonSecondary>
                                <ButtonPrimary onClick={orderCancelHandler} mr={3}>
                                    Cancel
                                </ButtonPrimary>
                            </HStack>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    };

export default ConfirmationModal;
