import React from 'react';
import {Button,ButtonProps} from "@chakra-ui/react";

const HeaderButton = ({children,...props}: ButtonProps) => {
    return (
        <Button {...props}  colorScheme={'button'} {...props}>
            {children}
        </Button>
    );
};

export default HeaderButton;
