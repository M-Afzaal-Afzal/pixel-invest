import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
import axios from "axios";
// import ordersInterface from '../../interfaces/orderInterface';

interface OpenOrdersSliceTypes {
    openOrders: {id: number;pixels: number;limit: number}[] | null;
    isLoading: boolean;
    errorMessage: string | null;
}

// Define the initial state using that type
const initialState: OpenOrdersSliceTypes = {
    openOrders: null,
    isLoading: false,
    errorMessage: null,

};

export const getOpenOrders = createAsyncThunk(
    'openOrders/getOpenOrders',
    async () => {
        return axios.get('https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-Api/openOrders')
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err.message)
                throw err.message;
            });
    }
)

export const openOrdersSlice = createSlice({
    name: 'openOrders',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // synchronous reducers go there
    },
    extraReducers: {
        [getOpenOrders.pending as any]: (state) => {
            state.errorMessage = null;
            state.isLoading = true;
        },
        [getOpenOrders.fulfilled as any]: (state, {payload}) => {
            state.errorMessage = null;
            state.openOrders = payload;
            state.isLoading = false;
        },
        [getOpenOrders.rejected as any]: (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false;
        }
    }
})

// export const {setCurrentUser} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectOpenOrders = (state: RootState) => state.openOrders.openOrders;
export const selectIsLoadingOOR = (state: RootState) => state.openOrders.isLoading;
export const selectErrorMessageOOR = (state: RootState) => state.openOrders.errorMessage;


export default openOrdersSlice.reducer;