import React from 'react';
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import CFormErrorMessage from "../components/Form/CFormErrorMessage";

interface Inputs {
    userName: string;
    password: string;
}

interface dataT {
    userName: string;
    password: string;
}

const Login: React.FC = () => {

    const {handleSubmit, formState: {errors}, register} = useForm<Inputs>();

    const onSubmit = (data: dataT) => {
        console.log(data)
    }

    return (
        <Box w={'100%'} bg={'#11111B'}>

            <Box mx={['2', '4', '8']} py={['4rem','6rem','8rem']} align={'center'}>

                <Box p={['8','16','24']} maxW={'40rem'} rounded={'lg'}
                     bgGradient={'linear(to-b,blue.300,blue.500)'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={!!errors?.userName}>
                            <FormLabel htmlFor="name">User Name</FormLabel>
                            {/* it is causing issues fro validation that's why we
                            cant make it's own component. So we've to repeat that.
                            Anyhow i've created CInput.tsx but it doen't work as expected
                            because of some issues. As we've to pass ref. */}
                            <Input
                                bg={'white'}
                                color={'blue.500'}
                                errorBorderColor="red.200"
                                placeholder="User Name"
                                {...register(
                                    'userName',
                                    {
                                        required: {
                                            value: true,
                                            message: 'You must specify the user name'
                                        },
                                    }
                                )}
                            />
                            <CFormErrorMessage>
                                {errors?.userName && errors.userName.message}
                            </CFormErrorMessage>
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors?.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                bg={'white'}
                                color={'blue.500'}
                                errorBorderColor="red.200"
                                placeholder="Password"
                                {...register(
                                    'password',
                                    {
                                        required: {
                                            value: true,
                                            message: 'You must have to specify the password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'You password must be of six or more characters'
                                        },
                                    }
                                )}

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
