import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
import axios from "axios";
import biggestAccountInterface from "../../interfaces/biggestAccountInterface";

type biggestAccountsSliceTypes = {
    biggestAccounts: biggestAccountInterface[] | null;
    isLoading: boolean;
    errorMessage: string | null;
}

// Define the initial state using that type
const initialState: biggestAccountsSliceTypes = {
    biggestAccounts: null,
    isLoading: false,
    errorMessage: null,

};

export const getBiggestAccounts = createAsyncThunk(
    'biggestAccounts/getBiggestAccounts',
    async () => {
        return axios.get('https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-Api/biggestAccounts')
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err.message)
                return err.message;
            });
    }
)

export const biggestAccountsSlice = createSlice({
    name: 'biggestAccounts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // synchronous reducers go there
    },
    extraReducers: {
        [getBiggestAccounts.pending as any]: (state) => {
            state.errorMessage = null;
            state.isLoading = true;
        },
        [getBiggestAccounts.fulfilled as any]: (state, {payload}) => {
            state.errorMessage = null;
            state.biggestAccounts = payload;
            state.isLoading = false;
        },
        [getBiggestAccounts.rejected as any]: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
})

// export const {setCurrentUser} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBiggestAccounts = (state: RootState) => state.biggestAccounts.biggestAccounts;
export const selectIsLoadingBA = (state: RootState) => state.biggestAccounts.isLoading;
export const selectErrorMessageBA = (state: RootState) => state.biggestAccounts.errorMessage;


export default biggestAccountsSlice.reducer;