import React from 'react';
import {Button,ButtonProps,forwardRef} from "@chakra-ui/react";

const DrawerButton = forwardRef<ButtonProps,'button'>(({children,...props},ref) => {
    return (
        <Button
            fontWeight={'normal'}
            colorScheme={'button'}
            isFullWidth
            fontSize={'1.3rem'}
            borderBottom={'.5px solid white'}
            size={'lg'}
            ref={ref}
            {...props}
        >
            {children}
        </Button>
    );
})

export default DrawerButton;
