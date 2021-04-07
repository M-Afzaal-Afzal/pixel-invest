import React from 'react';
import {Text} from '@chakra-ui/react'

const BodyText:React.FC = ({children,...props}) => {
    return (
        <Text
            fontWeight={'light'}
            fontSize={'1.5rem'}
            {...props}
            letterSpacing={'normal'}
        >
            {children}
        </Text>
    );
};

export default BodyText;
