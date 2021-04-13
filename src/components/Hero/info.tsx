import React from 'react';
import {Box, Grid} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import Image from "next/image";

import infoProps from '../../interfaces/infoProps';
import BodyHeading from "../Typography/BodyHeading";
import {motion} from "framer-motion";

const Info: React.FC<infoProps> = ({title,onClick,body,layoutId,photoURL,rightImage}) => {

    const MotionBox = motion(Box);

    return (
        <>
            <Box align={'center'}>
                <BodyHeading>{title}</BodyHeading>
            </Box>

            <Grid mt={6} alignItems={'center'} gridTemplateColumns={['1fr',null,'minmax(15rem,auto) 1fr']} gap={12}>
                {
                    rightImage ? (
                        <>
                            <MotionBox layoutId={layoutId} onClick={onClick} w={'16rem'} justifySelf={'center'} h={'11rem'} overflow={'hidden'} position={'relative'}>
                                <Image src={photoURL} layout={'fill'} objectFit={'cover'}/>
                            </MotionBox>
                            <BodyText>
                                {body}
                            </BodyText>
                        </>
                    ) : (
                        <>
                            <BodyText>
                                {body}
                            </BodyText>
                            <MotionBox layoutId={layoutId} onClick={onClick} order={[-1,null,1]} justifySelf={'center'} w={'16rem'} h={'11rem'} overflow={'hidden'} position={'relative'}>
                                <Image src={photoURL} layout={'fill'} objectFit={'cover'}/>
                            </MotionBox>
                        </>
                    )
                }

            </Grid>
        </>
    );
};

export default Info;
