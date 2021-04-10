import {Chakra} from '../theme/Chakra';
import "focus-visible/dist/focus-visible"

import {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";
import {Provider} from 'react-redux'
import store from '../store/store'

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </Chakra>
    )
}

export default MyApp

export {getServerSideProps} from "../theme/Chakra";
