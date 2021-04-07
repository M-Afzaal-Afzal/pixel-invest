import React from 'react';
import {Text} from '@chakra-ui/react'

const BodyText:React.FC = ({children,...props}) => {
    return (
        <Text
            fontWeight={'light'}
            fontSize={'1.2rem'}
            {...props}
            letterSpacing={'normal'}
        >
            {children}
        </Text>
    );
};

export default BodyText;
