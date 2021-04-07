import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager,
} from "@chakra-ui/react"
import {GetServerSideProps} from "next";

import theme from "./theme";

interface ChakraProps {
    cookies: string;
    children: JSX.Element;
}

export const Chakra = ({cookies, children}: ChakraProps) => {
    // b) Pass `colorModeManager` prop
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager
    return (
        <ChakraProvider resetCSS theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

// also export a reusable function getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({req}) => {
    return {
        props: {
            // first time users will not have any cookies and you may not return
            // undefined here, hence ?? is necessary
            cookies: req.headers.cookie ?? "",
        },
    }
}