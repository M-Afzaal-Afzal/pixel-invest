import React from 'react';
import {Button,ButtonProps,forwardRef} from "@chakra-ui/react";

const HeaderButton = forwardRef<ButtonProps,'button'>(({children,...props},ref) => {
    return (
        <Button {...props} ref={ref}  colorScheme={'button'} {...props}>
            {children}
        </Button>
    );
});

export default HeaderButton;
