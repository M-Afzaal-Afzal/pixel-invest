import React from 'react';
import {Box, Button, FormControl, FormLabel, Heading} from "@chakra-ui/react";
import CInput from "./CInput";
import CFormErrorMessage from "./CFormErrorMessage";
import CSelect from "../Select/CSelect";
import BodyText from "../Typography/BodyText";
import {useForm} from "react-hook-form";
import CFormInputCardProps from "../../interfaces/CFormInputCardProps";

type Inputs = {
    amount: string;
    firstInputName: string | number;
    secondInputName: string | Date | number;
    // for?: string;
    // validUntil?: Date;
    // to?: string;
}

const CFromInputCard: React.FC<CFormInputCardProps> = ({options, type}) => {

    const {handleSubmit,watch, errors, register} = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        switch (type) {
            case 'order':
                console.log('order component')
                console.log(data);
                break;
            case "offer":
                console.log('order component')
                console.log(data);
                break;
            case "recharge":
                console.log('offer component')
                console.log(data)
                break;
            case "withdraw":
                console.log('Withdraw component')
                console.log(data)
                break;
        }

    }

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

    // here some dynamic work

    let heading: string;


    // first
    let firstInputText: string;
    let firstInputName: string;
    let firstInputType: string;

    // second
    let secondInputText: string;
    let secondInputName: string;
    let secondInputType: string;

    //select input
    let selectInputText: string;
    let selectInputName: string;


    // button text
    let buttonText: string | null = null;

    switch (type) {
        case 'order':
            // first
            firstInputText = 'Amount';
            firstInputName = 'amount'
            firstInputType = 'number'
            // second
            secondInputText = 'Valid Until';
            secondInputName = 'validUntil';
            secondInputType = 'date';
            // select
            selectInputText = 'For';
            selectInputName = 'for';

            // Heading
            heading = 'Create Order';
            // button text
            buttonText = 'Create Order';
            break;
        case "offer":
            // first
            firstInputText = 'Amount';
            firstInputName = 'amount'
            firstInputType = 'number'
            // second
            secondInputText = 'Valid Until';
            secondInputName = 'validUntil';
            secondInputType = 'date';
            // select
            selectInputText = 'For';
            selectInputName = 'for';

            // Heading
            heading = 'Create Offer';
            // button text
            buttonText = 'Create Offer';
            break;
        case "recharge":
            // first
            firstInputText = 'Amount';
            firstInputName = 'amount'
            firstInputType = 'number'
            // second
            secondInputText = 'Confirm Pw';
            secondInputName = 'confirmPw';
            secondInputType = 'password';
            // select
            selectInputText = 'From';
            selectInputName = 'from';

            // Heading
            heading = 'Recharge';

            // button text
            buttonText = 'Recharge';
            break;
        case "withdraw":
            // first
            firstInputText = 'Amount';
            firstInputName = 'amount'
            firstInputType = 'number'
            // second
            secondInputText = 'Confirm Pw';
            secondInputName = 'confirmPw';
            secondInputType = 'password';
            // select
            selectInputText = 'To';
            selectInputName = 'to';

            // Heading
            heading = 'Withdraw';
            // button text
            buttonText = 'Withdraw';
            break;
    }

    const firstInputValue = watch(firstInputName)

    console.log(firstInputValue);

    return (
        <Box p={['8', '16', '24']}
             pt={['4', '8', '12']}
             maxW={'40rem'}
             rounded={'lg'}
             boxShadow={'rgb(19 15 235 / 20%) 2px 4px 40px'}
             bgGradient={'linear(to-b,brand.primary,brand.secondary)'}
        >
            <Heading mb={['4', '8', '12']}>
                {heading}
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*@ts-ignore*/}
                <FormControl isInvalid={!!errors[firstInputName]}>
                    <FormLabel htmlFor="amount">{firstInputText}</FormLabel>
                    <CInput
                        placeholder={firstInputText}
                        name={firstInputName}
                        ref={amountReg}
                        type={firstInputType}
                    />
                    <CFormErrorMessage>
                        {
                            //@ts-ignore
                            errors[firstInputName] && errors[firstInputName].message
                        }
                    </CFormErrorMessage>
                </FormControl>

                <FormControl mt={4} id="selectFor">
                    <FormLabel>{selectInputText}</FormLabel>
                    <CSelect
                        name={selectInputName}
                        placeholder="Select"
                        ref={selectReg}
                    >
                        {
                            options?.map((opt) => (
                                <option>{opt}</option>
                            ))
                        }

                    </CSelect>
                </FormControl>

                {/*@ts-ignore*/}
                <FormControl mt={4} isInvalid={!!errors[secondInputName]}>
                    <FormLabel htmlFor={secondInputName}>{secondInputText}</FormLabel>
                    <CInput
                        placeholder={secondInputText}
                        name={secondInputName}
                        ref={(type === 'order' || type === 'offer') ? dateReg : confirmPwReg}
                        type={secondInputType}
                    />
                    <CFormErrorMessage>
                        {
                            //@ts-ignore
                            errors[secondInputName] && errors[secondInputName].message
                        }
                    </CFormErrorMessage>
                </FormControl>
                <Box mt={8}>
                    <BodyText>
                        1920 PiXeLs for 1542,23 €
                    </BodyText>
                </Box>
                <Box align={'center'}>
                    <Button mt={8} colorScheme="button" type="submit">
                        {buttonText}
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default CFromInputCard;
