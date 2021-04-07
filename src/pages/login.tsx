import React from 'react';
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import CFormErrorMessage from "../components/Form/CFormErrorMessage";

type Inputs = {
    userName: string;
    password: string;
}

const Login: React.FC = () => {

    const {handleSubmit, errors, register} = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data)
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

                <Box p={['8','16','24']} maxW={'40rem'} rounded={'lg'}
                     bgGradient={'linear(to-b,brand.primary,brand.secondary)'}>
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
                                name={'userName'}
                                ref={userNameReg}
                            />
                            <CFormErrorMessage>
                                {errors?.userName && errors.userName.message}
                            </CFormErrorMessage>
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors?.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                name={'password'}
                                ref={passwordReg}
                                type={'password'}
                                bg={'white'}
                                color={'blue.500'}
                                errorBorderColor="red.200"
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
