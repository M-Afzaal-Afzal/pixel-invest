import React, {useEffect} from 'react';
import {Box, FormControl, FormLabel, Heading, useToast} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import CFormErrorMessage from "../components/Form/CFormErrorMessage";
import CInput from "../components/Form/CInput";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {
    selectCurrentUser,
    selectIsLoadingCU
} from "../store/currentUser/currentUserSlice";

import {getCurrentUser} from "../services/api";

import {useRouter} from "next/router";
import {Fade} from "react-awesome-reveal";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";

type Inputs = {
    userName: string;
    password: string;
}

const Login: React.FC = () => {

    const {handleSubmit, errors, register} = useForm<Inputs>();

    const dispatch = useAppDispatch();
    const router = useRouter();

    const isLoggedIn = useAppSelector(selectCurrentUser);
    const isLoading = useAppSelector(selectIsLoadingCU);
    const toast = useToast();


    const userNameReg = register({
        required: 'You must have to specify the user name',
    })

    const passwordReg = register({
        required: 'You must have to specify the password',
        minLength: {
            value: 6,
            message: 'You password must be of six or more characters'
        }
    })

    useEffect(() => {
        if (!!isLoggedIn?.userName) {
            router.replace('/dashboard');
        }
    }, [isLoggedIn])

    const onSubmit = async (data: Inputs) => {
        console.log(data)
        const resultAction = await dispatch(getCurrentUser());

        // code for handling the error and showing the dialog
        if (getCurrentUser.fulfilled.match(resultAction)) {
            if (resultAction.payload) {
                toast({
                    title: 'Login successful',
                    status: 'success',
                    isClosable: true,
                })
            }

        } else {
            if (resultAction.error) {
                toast({
                    title: resultAction.error.message,
                    status: 'error',
                    isClosable: true,
                })
            }
        }
    }

    return (
        <Box
            w={'100%'}
            bg={'brand.tertiary'}
        >

            <Box mx={['2', '4', '8']} py={['4rem', '6rem', '8rem']} align={'center'}>
                <Fade triggerOnce direction={'up'}>
                    <Box p={['8', '16', '24']}
                         pt={['4', '8', '12']}
                         maxW={'40rem'}
                         rounded={'lg'}
                         boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
                        // bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
                         bg={'brand.primary'}
                    >
                        <Heading mb={['4', '8', '12']}>
                            Login
                        </Heading>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={!!errors?.userName}>
                                <FormLabel htmlFor="name">User Name</FormLabel>
                                <CInput
                                    placeholder="User Name"
                                    name={'userName'}
                                    ref={userNameReg}
                                />
                                <CFormErrorMessage>
                                    {errors?.userName && errors.userName.message}
                                </CFormErrorMessage>
                            </FormControl>

                            <FormControl mt={4} isInvalid={!!errors?.password}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <CInput
                                    name={'password'}
                                    ref={passwordReg}
                                    type={'password'}
                                    placeholder="Password"

                                />
                                <CFormErrorMessage>
                                    {errors?.password && errors.password.message}
                                </CFormErrorMessage>
                            </FormControl>

                            <ButtonSecondary isLoading={isLoading} mt={8} type="submit">
                                Login
                            </ButtonSecondary>
                        </form>
                    </Box>
                </Fade>

            </Box>

        </Box>
    );
};

export default Login;
