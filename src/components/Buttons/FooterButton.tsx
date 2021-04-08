import React from 'react';
import {Button,ButtonProps} from "@chakra-ui/react";

const FooterButton = ({children,...props}: ButtonProps) => {
    return (
        <Button colorScheme={'white'} variant={'link'} {...props}>{children}</Button>

    );
};

export default FooterButton;
