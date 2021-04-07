import React from 'react';
import {Button} from "@chakra-ui/react";

const DrawerButton:React.FC<any> = ({children}) => {
    return (
        <Button
            fontWeight={'normal'}
            colorScheme={'button'}
            isFullWidth
            fontSize={'1.3rem'}
            borderBottom={'.5px solid white'}
            size={'lg'}
        >
            {children}
        </Button>
    );
};

export default DrawerButton;
