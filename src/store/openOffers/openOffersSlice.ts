import { createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {getOpenOffers} from "../../services/getOpenOffers";

// Define a type for the slice state
import offerInterface from "../../interfaces/offerInterface";
// import offerInterface from '../../interfaces/offerInterface';

interface OpenOrdersSliceTypes {
    openOffers: offerInterface[] | null;
    isLoading: boolean;
    errorMessage: string | null;
}

// Define the initial state using that type
const initialState: OpenOrdersSliceTypes = {
    openOffers: null,
    isLoading: false,
    errorMessage: null,

};

export const openOffersSlice = createSlice({
    name: 'openOrders',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // synchronous reducers go there
    },
    extraReducers: {
        [getOpenOffers.pending as any]: (state) => {
            state.errorMessage = null;
            state.isLoading = true;
        },
        [getOpenOffers.fulfilled as any]: (state, {payload}) => {
            state.errorMessage = null;
            state.openOffers = payload;
            state.isLoading = false;
        },
        [getOpenOffers.rejected as any]: (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false;
        }
    }
})

// export const {setCurrentUser} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectOpenOffers = (state: RootState) => state.openOffers.openOffers;
export const selectIsLoadingOOF = (state: RootState) => state.openOffers.isLoading;
export const selectErrorMessageOOF = (state: RootState) => state.openOffers.errorMessage;


export default openOffersSlice.reducer;