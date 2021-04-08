import React from 'react';
import {Box, Grid} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import Image from "next/image";

import infoProps from '../../interfaces/infoProps';
import BodyHeading from "../Typography/BodyHeading";

const Info: React.FC<infoProps> = ({title,body,photoURL,rightImage}) => {
    return (
        <>
            <Box align={'center'}>
                <BodyHeading>{title}</BodyHeading>
            </Box>

            <Grid mt={6} alignItems={'center'} gridTemplateColumns={['1fr',null,'minmax(15rem,auto) 1fr']} gap={12}>
                {
                    rightImage ? (
                        <>
                            <Box w={'16rem'} justifySelf={'center'} h={'11rem'} overflow={'hidden'} position={'relative'}>
                                <Image src={photoURL} layout={'fill'} objectFit={'cover'}/>
                            </Box>
                            <BodyText>
                                {body}
                            </BodyText>
                        </>
                    ) : (
                        <>
                            <BodyText>
                                {body}
                            </BodyText>
                            <Box order={[-1,null,1]} justifySelf={'center'} w={'16rem'} h={'11rem'} overflow={'hidden'} position={'relative'}>
                                <Image src={photoURL} layout={'fill'} objectFit={'cover'}/>
                            </Box>
                        </>
                    )
                }

            </Grid>
        </>
    );
};

export default Info;
