import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Heading, useDisclosure} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import ConfirmationModal from "../Modal/ConfirmationModal";
import { useToast } from "@chakra-ui/react"


type Inputs = {
    name: string;
    email: string;
    password: string;
    paypal: string;
}

const CFormInputCard = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    // toast is used for showing the dialog

    const toast = useToast();

    const [isConfirmed,setIsConfirmed] = useState<boolean>(false);

    const makeFormConfirmed = () => {
        setIsConfirmed(true);
    }

    const makeFromRejected = () => {
        setIsConfirmed(false);
    }

    const {handleSubmit, errors, register,reset} = useForm<Inputs>();

    const passwordReg = register({
        required: {
            value: true,
            message: 'You must have to specify the password'
        },
        minLength: {
            value: 6,
            message: 'You password must be of six characters',
        }
    })

    const emailReg = register({
        required: {
            value: true,
            message: 'You must have to specify the email',
        },
        pattern:{
            value: /^\S+@\S+$/i,
            message: 'Wrong email, Please specify the right one'
        }
    })

    const nameReg = register({
        required: {
            value: true,
            message: 'You must have to specify you name',
        }
    })

    const paypalReg = register({
        required: {
            value: true,
            message: 'You must have to enter your account number'
        },
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Wrong, Please specify the right one'
        } ,
        minLength: {
            value: 6,
            message: 'Too short, please enter the right account number',
        }
    })

    const onSubmit = (data: Inputs) => {

        if (!isConfirmed) {
            makeFormConfirmed();
            onOpen();
            return;
        }

        // actual logic goes here

        console.log(data)

        toast({
            title: `Changes are applied successfully`,
            status: 'success',
            isClosable: true,
        })

        // we can also use the above toast for error by changing the status of error

        // resetting the form after successful confirmation
        reset({
            email: '',
            name: '',
            paypal: '',
            password: '',
        })

        // if successful this dialog will be used

        // if error this dialog will be used
    }


    return (
        <Box p={['8', '16', '24']}
             pt={['4', '8', '12']}
             maxW={'40rem'}
             rounded={'lg'}
             // bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
             boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
             bg={'brand.primary'}
        >
            <Heading mb={['4', '8', '12']}>
                Info
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel htmlFor="amount">Name</FormLabel>
                    <CInput
                        placeholder={'Name'}
                        name={'name'}
                        ref={nameReg}
                        type={'text'}
                    />
                    <CFormErrorMessage>
                        {
                            errors.name && errors.name.message
                        }
                    </CFormErrorMessage>
                </FormControl>


                <FormControl mt={4} isInvalid={!!errors.email}>
                    <FormLabel htmlFor="amount">Email</FormLabel>
                    <CInput
                        placeholder={'Email'}
                        name={'email'}
                        ref={emailReg}
                        type={'email'}
                    />
                    <CFormErrorMessage>
                        {

                            errors.email && errors.email.message
                        }
                    </CFormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <CInput
                        placeholder={'Password'}
                        name={'password'}
                        ref={passwordReg}
                        type={'password'}
                    />
                    <CFormErrorMessage>
                        {
                            //@ts-ignore
                            errors.password && errors.password.message
                        }
                    </CFormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={!!errors.paypal}>
                    <FormLabel htmlFor="password">Paypal</FormLabel>
                    <CInput
                        placeholder={'Paypal'}
                        name={'paypal'}
                        ref={paypalReg}
                        type={'email'}
                    />
                    <CFormErrorMessage>
                        {
                            //@ts-ignore
                            errors.paypal && errors.paypal.message
                        }
                    </CFormErrorMessage>
                </FormControl>
                <Box align={'center'}>
                    <ButtonSecondary mt={8} type="submit">
                        Apply Changes
                    </ButtonSecondary>
                </Box>
                <ConfirmationModal heading={'Are You Sure To Recharge?'}
                                   onSubmit={onSubmit}
                                   makeFromRejected={makeFromRejected}
                                   handleSubmit={handleSubmit}
                                   onClose={onClose}
                                   isOpen={isOpen}
                >
                    {'Are you sure to apply changes?'}
                </ConfirmationModal>
            </form>
        </Box>
    );
};

export default CFormInputCard;
