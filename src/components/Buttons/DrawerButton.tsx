import React from 'react';
import {Button,ButtonProps,forwardRef} from "@chakra-ui/react";
import {motion} from "framer-motion";

const DrawerButton = forwardRef<ButtonProps,'button'>(({children,...props},ref) => {
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
            fontWeight={'normal'}
            colorScheme={'button'}
            isFullWidth
            fontSize={'1.3rem'}
            borderBottom={'.5px solid white'}
            size={'lg'}
            ref={ref}
            {...props}
        >
            {children}
        </Button>
    );
})

export default DrawerButton;
