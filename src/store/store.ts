import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

// ...

import currentUserReducer from "./currentUser/currentUserSlice";
import biggestAccountsReducer from '../store/biggestAccounts/biggestAccountsSlice';
import openOrdersReducer from '../store/openOrders/openOrdersSlice';
import openOffersReducer from '../store/openOffers/openOffersSlice';
import pixelValueReducer from '../store/pixelValue/pixelValue'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    biggestAccounts: biggestAccountsReducer,
    openOrders: openOrdersReducer,
    openOffers: openOffersReducer,
    pixel: pixelValueReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;