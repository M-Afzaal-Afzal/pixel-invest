import React, {useState} from 'react';
import {
    Box, FormControl,
    FormLabel, Heading, useDisclosure, useToast,
} from "@chakra-ui/react";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../store/hooks";
import {selectPixelValue} from "../../store/pixelValue/pixelValue";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import ConfirmationModal from "../Modal/ConfirmationModal";

type Inputs = {
    amount: string;
    for: string;
    validUntil: string;
}

interface orderInputCardProps {
    options: string[];
}

const OrderInputCard: React.FC<orderInputCardProps> = ({options}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const toast = useToast();

    const [isConfirmed,setIsConfirmed] = useState<boolean>(false);

    const makeFormConfirmed = () => {
        setIsConfirmed(true);
    }

    const makeFromRejected = () => {
        setIsConfirmed(false);
    }

    // using the react hook form

    const {handleSubmit, watch, errors, register,reset} = useForm<Inputs>();

    // selecting the pixel value from the store

    const pixelValue = useAppSelector(selectPixelValue);

    const amountValue = watch('amount');

    // registers to handle the form validation

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

    const dateReg = register({
        required: 'Please select Date',
    })

    // when we submit the form

    const onSubmit = (data: Inputs) => {
        // if not confirmed then this will be returned
        if (!isConfirmed) {
            makeFormConfirmed();
            onOpen();
            return;
        }

        // if confirmed our actual logic goes here

        console.log(data);

        reset({
            amount: '',
            for: '',
            validUntil: ''
        })

        toast({
            title: `Order Created Successfully`,
            status: 'success',
            isClosable: true,
        })

    }

    // getting the body text

    let bodyText = `${pixelValue && amountValue ? (+amountValue / +pixelValue) : '___'} PiXeLs for ${amountValue ? amountValue : '___'} €`;


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
                {'Create Order'}
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*@ts-ignore*/}
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
                    <FormLabel>{'For'}</FormLabel>
                    <CSelect
                        name={'for'}
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


                <FormControl mt={4} isInvalid={!!errors.validUntil}>
                    <FormLabel htmlFor={'validUntil'}>Valid Until</FormLabel>
                    <CInput
                        placeholder={'Valid Until'}
                        name={'validUntil'}
                        ref={dateReg}
                        type={'date'}
                    />
                    <CFormErrorMessage>
                        {
                            //@ts-ignore
                            errors.for && errors.for.message
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
                        Create Orders
                    </ButtonSecondary>
                </Box>

                {/*    dialog to confirm*/}
                <ConfirmationModal heading={'Are You Sure To Create Order?'}
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

export default OrderInputCard;
