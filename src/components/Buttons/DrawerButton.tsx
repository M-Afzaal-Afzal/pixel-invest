import React from 'react';
import {Button,ButtonProps} from "@chakra-ui/react";

const DrawerButton = ({children,...props}: ButtonProps) => {
    return (
        <Button
            fontWeight={'normal'}
            colorScheme={'button'}
            isFullWidth
            fontSize={'1.3rem'}
            borderBottom={'.5px solid white'}
            size={'lg'}
            {...props}
        >
            {children}
        </Button>
    );
};

export default DrawerButton;
