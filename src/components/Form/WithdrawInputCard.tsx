import React from 'react';
import {Box, Button, FormControl, FormLabel, Heading} from "@chakra-ui/react";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import {useForm} from "react-hook-form";

type Inputs = {
    amount: string;
    to: number;
    confirmPw: string;
}

interface orderInputCardProps {
    options: string[];
}

const WithdrawInputCard: React.FC<orderInputCardProps> = ({ options}) => {

    const {handleSubmit, watch, errors, register} = useForm<Inputs>();

    const amountValue: string = watch('amount');
    const selectValue = watch('to');

    const amountReg = register({
        required: {
            value: true,
            message: 'Please enter amount'
        },
    })

    const selectReg = register({
        required: {
            value: true,
            message: 'Please select one option'
        },
    })

    const confirmPwReg = register({
        required: {
            value: true,
            message: 'You must have to specify the password'
        },
        minLength: {
            value: 6,
            message: 'You password must be of six characters',
        }
    })

    const onSubmit = (data: Inputs) => {
        console.log(data);

    }

    return (
        <Box p={['8', '16', '24']}
             pt={['4', '8', '12']}
             maxW={'40rem'}
             rounded={'lg'}
             boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
             // bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
            bg={'brand.primary'}
        >
            <Heading mb={['4', '8', '12']}>
                {'Withdraw'}
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*@ts-ignore*/}
                <FormControl isInvalid={!!errors.amount}>
                    <FormLabel htmlFor="amount">Amount</FormLabel>
                    <CInput
                        placeholder={'Amount'}
                        name={'amount'}
                        ref={amountReg}
                        type={'number'}
                    />
                    <CFormErrorMessage>
                        {
                            errors.amount && errors.amount.message
                        }
                    </CFormErrorMessage>
                </FormControl>

                <FormControl mt={4} id="selectTo">
                    <FormLabel>{'To'}</FormLabel>
                    <CSelect
                        name={'to'}
                        placeholder="Select"
                        ref={selectReg}
                        defaultValue={options[0]}
                    >
                        {
                            options?.map((opt) => (
                                <option>{opt}</option>
                            ))
                        }

                    </CSelect>
                </FormControl>


                <FormControl mt={4} isInvalid={!!errors.confirmPw}>
                    <FormLabel htmlFor={'confirmPw'}>Valid Until</FormLabel>
                    <CInput
                        placeholder={'Confirm Password'}
                        name={'confirmPw'}
                        ref={confirmPwReg}
                        type={'password'}
                    />
                    <CFormErrorMessage>
                        {
                            errors.confirmPw && errors.confirmPw.message
                        }
                    </CFormErrorMessage>
                </FormControl>
                <Box mt={8}>
                    <BodyText>
                        {
                            `Withdraw ${amountValue ? amountValue : '___'} € to ${selectValue ? selectValue : '___'}`
                        }

                    </BodyText>
                </Box>
                <Box align={'center'}>
                    <Button mt={8} colorScheme="buttonTwo" type="submit">
                        Withdraw
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default WithdrawInputCard;
