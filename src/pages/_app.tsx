import {Chakra} from '../theme/Chakra';
import "focus-visible/dist/focus-visible"


import {AppProps} from 'next/app'
import Header from "../components/Layout/Header";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </>
        </Chakra>
    )
}

export default MyApp

export {getServerSideProps} from "../theme/Chakra";
