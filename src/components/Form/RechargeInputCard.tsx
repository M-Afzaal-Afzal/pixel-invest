import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Heading, useDisclosure} from "@chakra-ui/react";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import {useForm} from "react-hook-form";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import ConfirmationModal from "../Modal/ConfirmationModal";

type Inputs = {
    amount: string;
    to: string;
    confirmPw: string;
}

interface orderInputCardProps {
    options: string[];
}

const WithdrawInputCard: React.FC<orderInputCardProps> = ({options}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    const makeFormConfirmed = () => {
        setIsConfirmed(true);
    }

    const makeFromRejected = () => {
        setIsConfirmed(false);
    }

    const {handleSubmit, watch, errors, register, reset} = useForm<Inputs>();

    const amountValue = watch('amount');


    const selectValue = watch('from');

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

        if (!isConfirmed) {
            makeFormConfirmed();
            onOpen();
            return;
        }

        console.log(data);
        reset({
            amount: '',
            confirmPw: '',
            to: ''
        })


    }

    let bodyText = `Recharge ${amountValue ? amountValue : '___'} € from ${selectValue ? selectValue : '___'}`


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
                {'Recharge'}
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={!!errors.amount}>
                    <FormLabel htmlFor="amount">Amount</FormLabel>
                    <CInput
                        min={0}
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

                <FormControl mt={4} id="selectFor">
                    <FormLabel>{'From'}</FormLabel>
                    <CSelect
                        name={'from'}
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
                            bodyText
                        }

                    </BodyText>
                </Box>
                <Box align={'center'}>
                    <ButtonSecondary mt={8} type={'submit'}>
                        Recharge
                    </ButtonSecondary>
                </Box>
                <ConfirmationModal heading={'Are You Sure To Recharge?'}
                                   onSubmit={onSubmit}
                                   makeFromRejected={makeFromRejected}
                                   handleSubmit={handleSubmit}
                                   onClose={onClose}
                                   isOpen={isOpen}
                >
                    {bodyText}
                </ConfirmationModal>
            </form>
        </Box>
    );
};

export default WithdrawInputCard;
