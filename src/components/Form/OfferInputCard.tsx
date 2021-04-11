import React from 'react';
import {Box, Button, FormControl, FormLabel, Heading} from "@chakra-ui/react";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../store/hooks";
import {selectPixelValue} from "../../store/pixelValue/pixelValue";

type Inputs = {
    amount: string;
    for: number;
    validUntil:  Date ;
}

interface orderInputCardProps {
    options: string[];
}

const OfferInputCard: React.FC<orderInputCardProps> = ({options}) => {

    const {handleSubmit,watch, errors, register} = useForm<Inputs>();

    const pixelValue = useAppSelector(selectPixelValue);

    const amountValue = watch('amount');

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
                {'Create Offer'}
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
                            errors.for && errors.for.message
                        }
                    </CFormErrorMessage>
                </FormControl>
                <Box mt={8}>
                    <BodyText>
                        {
                            `${pixelValue && amountValue ? (+amountValue / +pixelValue) : '___'} PiXeLs for ${amountValue ? amountValue : '___'} €`
                        }

                    </BodyText>
                </Box>
                <Box align={'center'}>
                    <Button mt={8} colorScheme="buttonTwo" type="submit">
                        Create Offers
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default OfferInputCard;
