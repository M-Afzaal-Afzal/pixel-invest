import React from 'react';
import {Input,InputProps,forwardRef} from "@chakra-ui/react";

const CInput =forwardRef<InputProps,'input'> ((props,ref) => {
    return (
        <Input
            bg={'white'}
            color={'blue.500'}
            errorBorderColor="red.200"
            ref={ref}
            {...props}
        />
    );
})

export default CInput;
