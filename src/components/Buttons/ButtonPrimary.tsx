import React from 'react';
import {Box, Button, ButtonProps, forwardRef} from "@chakra-ui/react";
import {motion} from "framer-motion";

const ButtonPrimary = forwardRef<ButtonProps, 'button'>(({children, ...props}, ref) => {

    const MotionButton = motion(Box);

    return (
        <Button
            as={MotionButton}
            whileHover={{
                scale: '1.0777',
            }}
            whileTap={{
                scale: '1'
            }}
            {...props}
            ref={ref}
            colorScheme={'button'}
            {...props}>
            {children}
        </Button>
    );
});

export default ButtonPrimary;