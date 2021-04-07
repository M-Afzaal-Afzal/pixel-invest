import React from 'react';
import {Button} from "@chakra-ui/react";

const FooterButton:React.FC = ({children}) => {
    return (
        <Button colorScheme={'white'} variant={'link'}>{children}</Button>

    );
};

export default FooterButton;
