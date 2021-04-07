import React from 'react';
import {Input} from "@chakra-ui/react";

// we implemented it as a class based component
// as we can't pass ref to functional components

class CInput extends React.Component {
    render() {
        return (
            <Input
                bg={'white'}
                color={'blue.500'}
                errorBorderColor="red.200"
                {...this.props}
            />
        );
    }

}

export default CInput;
