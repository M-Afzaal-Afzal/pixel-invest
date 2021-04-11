import {Chakra} from '../theme/Chakra';
import "focus-visible/dist/focus-visible"

import {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";
import {Provider} from 'react-redux'
import store from '../store/store'
import {persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react'


const MyApp = ({Component, pageProps}: AppProps) => {

    let persistor = persistStore(store)

    return (
        <Chakra cookies={pageProps.cookies}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </Chakra>
    )
}

export default MyApp

export {getServerSideProps} from "../theme/Chakra";
