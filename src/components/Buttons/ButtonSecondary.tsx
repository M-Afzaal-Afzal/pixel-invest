import React from 'react';
import { Button, ButtonProps, forwardRef} from "@chakra-ui/react";
import {motion} from "framer-motion";

const ButtonSecondary = forwardRef<ButtonProps, 'button'>(({children, ...props}, ref) => {

    const MotionButton = motion(Button);

    return (
        <MotionButton
            whileHover={{
                scale: '1.0777',
            }}

            whileTap={{
                scale: '1'
            }}
            ref={ref}
            colorScheme={'buttonTwo'}
            {...props}
            >
            {children}
        </MotionButton>
    );
});

export default ButtonSecondary;
