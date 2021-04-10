import React from 'react';
import {Box, Button, FormControl, FormLabel, Heading} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import CFormErrorMessage from "../components/Form/CFormErrorMessage";
import CInput from "../components/Form/CInput";
import {useAppDispatch} from "../store/hooks";
import {getCurrentUser} from "../store/currentUser/currentUserSlice";

type Inputs = {
    userName: string;
    password: string;
}

const Login: React.FC = () => {

    const {handleSubmit, errors, register} = useForm<Inputs>();

    const dispatch = useAppDispatch();

    const onSubmit = (data: Inputs) => {
        console.log(data)
        dispatch(getCurrentUser());
    }

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

    return (
        <Box w={'100%'} bg={'brand.black'}>

            <Box mx={['2', '4', '8']} py={['4rem','6rem','8rem']} align={'center'}>

                <Box p={['8','16','24']}
                     pt={['4','8','12']}
                     maxW={'40rem'}
                     rounded={'lg'}
                     bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
                >
                    <Heading mb={['4','8','12']}>
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

                        <Button mt={8} colorScheme="blue" type="submit">
                            Login
                        </Button>
                    </form>
                </Box>

            </Box>

        </Box>
    );
};

export default Login;
