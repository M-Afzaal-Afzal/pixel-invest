import React from 'react';
import {Select,SelectProps,forwardRef} from "@chakra-ui/react";


const CSelect = forwardRef<SelectProps,'select'>(({children,...props},ref)=> {
    return (
        <Select
            bg={'white'}
            color={'brand.secondary'}
            background={'white'}
            required={true}
            name={'for'}
            placeholder="Select"
            ref={ref}
            {...props}
        >
            {children}
        </Select>
    );
})

export default CSelect;
