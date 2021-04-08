import React from 'react';
import {FormErrorMessage,FormErrorMessageProps} from "@chakra-ui/react";

const CFormErrorMessage = ({children,...props}: FormErrorMessageProps) => {
    return (
        <FormErrorMessage color={'yellow.200'} {...props}>
            {children}
        </FormErrorMessage>
    );
};

export default CFormErrorMessage;
