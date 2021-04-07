import React from 'react';
import {FormErrorMessage} from "@chakra-ui/react";

const CFormErrorMessage:React.FC = ({children,...props}) => {
    return (
        <FormErrorMessage color={'yellow.200'} {...props}>
            {children}
        </FormErrorMessage>
    );
};

export default CFormErrorMessage;
