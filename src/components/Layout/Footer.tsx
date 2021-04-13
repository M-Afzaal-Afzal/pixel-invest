import React from "react";
import {Box, Container, Stack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import FooterButton from "../Buttons/FooterButton";
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <Box p={['8', '12', '16']} px={['2', '4']} bg={'brand.secondary'}>
            <Container maxW={'container.xl'}>
                <Box align={'center'}>
                    <BodyText>
                        Powered by PiXeL-invest UG
                    </BodyText>
                </Box>
                <Box>
                    <Stack spacing={4} mt={6} justifyContent={'center'} direction={['column', 'column', 'row']}>
                        <FooterButton>Contact</FooterButton>
                        <FooterButton>Imprint</FooterButton>
                        <FooterButton>Terms of Use</FooterButton>
                        <FooterButton>Support</FooterButton>
                        <FooterButton>About Us</FooterButton>
                        <FooterButton>FAQ</FooterButton>
                    </Stack>
                </Box>
                <Box align={'center'} mt={'2rem'}>
                    <Box borderWidth={'5px'}
                         bg={'white'}
                         borderColor={'brand.primary'}
                         rounded={'xl'} boxShadow={'lg'}
                         w={['16.5rem','23rem']} h={['6.5rem','8rem']}
                         display={'flex'} alignItems={'center'}
                         justifyContent={'center'}
                    >
                        <Box width={['14rem','20rem']} h={['3.5rem','5rem']} position={'relative'}>
                            <Image src={'/home/footer-logo.png'} objectFit={'cover'} layout={'fill'}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;