import React from 'react';
import {Box, Heading} from "@chakra-ui/react";

const Pentagon: React.FC = () => {
    return (
        <Box position={'relative'}
             maxW={'30rem'}
             minH={'30rem'}
             bgGradient={'linear(to-b,#224767,#0203BA)'}
             clipPath={'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}
             display={'flex'}
             alignItems={'center'}
             justifyContent={'center'}
        >
            <Heading
                fontSize={'8xl'}
                fontWeight={'normal'}
            >
                PiXeL
            </Heading>
        </Box>
    );
};

export default Pentagon;
