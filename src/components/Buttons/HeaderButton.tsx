import React from 'react';
import {Button} from "@chakra-ui/react";

const HeaderButton: React.FC<any> = ({children,...props}) => {
    return (
        <Button colorScheme={'button'} {...props}>
            {children}
        </Button>
    );
};

export default HeaderButton;
