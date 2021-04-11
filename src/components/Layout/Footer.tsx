import React from "react";
import {Box, Container, Stack} from "@chakra-ui/react";
import BodyText from "../Typography/BodyText";
import FooterButton from "../Buttons/FooterButton";

const Footer: React.FC = () => {
    return (
        <Box p={['8', '12', '16', '24']} px={['2', '4']} bg={'brand.secondary'}>
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
            </Container>
        </Box>
    )
}

export default Footer;