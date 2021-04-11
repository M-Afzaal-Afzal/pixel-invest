import { configureStore } from '@reduxjs/toolkit'
// ...

import currentUserReducer from "./currentUser/currentUserSlice";
import biggestAccountsReducer from '../store/biggestAccounts/biggestAccountsSlice';
import openOrdersReducer from '../store/openOrders/openOrdersSlice';
import openOffersReducer from '../store/openOffers/openOffersSlice';
import pixelValueReducer from '../store/pixelValue/pixelValue'

const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        biggestAccounts: biggestAccountsReducer,
        openOrders: openOrdersReducer,
        openOffers: openOffersReducer,
        pixel: pixelValueReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;