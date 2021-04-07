import React from 'react';
import {Text} from "@chakra-ui/react";

const BodyHeading: React.FC = ({children,...props}) => {
    return (
        <Text
            fontWeight={'normal'}
            fontSize={'1.5rem'}
            {...props}
            letterSpacing={'normal'}
        >
            {children}
        </Text>
    );
};

export default BodyHeading;
