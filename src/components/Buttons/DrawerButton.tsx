import React from 'react';
import {Button} from "@chakra-ui/react";

const DrawerButton:React.FC = ({children}) => {
    return (
        <Button
            fontWeight={'normal'}
            colorScheme={'blue'}
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
