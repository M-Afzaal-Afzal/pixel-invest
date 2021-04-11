import React from 'react';
import { Button, ButtonProps, forwardRef} from "@chakra-ui/react";
import {motion} from "framer-motion";

const ButtonSecondary = forwardRef<ButtonProps, 'button'>(({children, ...props}, ref) => {

    const MotionButton = motion(Button);

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
            colorScheme={'buttonTwo'}
            {...props}>
            {children}
        </Button>
    );
});

export default ButtonSecondary;
