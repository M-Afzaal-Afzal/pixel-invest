import {Chakra} from '../theme/Chakra';
import "focus-visible/dist/focus-visible"

import {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Chakra>
    )
}

export default MyApp

export {getServerSideProps} from "../theme/Chakra";
