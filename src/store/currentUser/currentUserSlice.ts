import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
import userInterface from "../../interfaces/userInterface";
import axios from "axios";

interface currentUserSliceTypes {
    user: userInterface | null;
    isLoading: boolean;
    errorMessage: string | null;
}

// Define the initial state using that type
const initialState: currentUserSliceTypes = {
    user: null,
    isLoading: false,
    errorMessage: null,

};

export const getCurrentUser = createAsyncThunk(
    'currentUser/getCurrentUser',
    async () => {
        return axios.get('https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-Api/myAccount')
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

export const currentUserSlice = createSlice({
    name: 'currentUser',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // setCurrentUser: (state,action:PayloadAction<currentUserInterface>) => {
        //     state.user = action.payload
        //     // state.id = action.payload.id;
        //     // state.userName = action.payload.userName;
        //     // state.email = action.payload.email;
        //     // state.pixels = action.payload.pixels;
        //     // state.balance = action.payload.balance;
        //     // state.tradeHistory = action.payload.tradeHistory;
        //     // state.orders = action.payload.orders;
        //     // state.offers = action.payload.offers;
        // },
        // setIsLoadingFalse: (state) => {
        //     state.isLoading = false;
        // },
        // setIsLoadingTrue: (state) => {
        //     state.isLoading = true;
        // },
    },
    extraReducers: {
        [getCurrentUser.pending as any]: (state) => {
            state.errorMessage = null;
            state.isLoading = true;
        },
        [getCurrentUser.fulfilled as any]: (state, {payload}) => {
            state.errorMessage = null;
            state.user = payload;
            state.isLoading = false;
        },
        [getCurrentUser.rejected as any]: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
})

// export const {setCurrentUser} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.currentUser.user;
export const selectIsLoadingCU = (state: RootState) => state.currentUser.isLoading;
export const selectErrorMessageCU = (state: RootState) => state.currentUser.errorMessage;

export default currentUserSlice.reducer