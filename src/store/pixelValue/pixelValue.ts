import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
import axios from "axios";

// import ordersInterface from '../../interfaces/orderInterface';

interface pixelValueInterface {
   value: number | null;
   errorMessage: string | null;
   isLoading: boolean;
}

// Define the initial state using that type
const initialState: pixelValueInterface = {
    value: null,
    errorMessage: null,
    isLoading: false
};

export const getPixelValue = createAsyncThunk(
    'pixelValue/getPixelValue',
    async () => {
        return axios.get('https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-Api/pixel')
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

export const pixelValueSlice = createSlice({
    name: 'pixelValue',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // synchronous reducers go there
    },
    extraReducers: {
        [getPixelValue.pending as any]: (state) => {
            state.errorMessage = null;
            state.isLoading = true;
        },
        [getPixelValue.fulfilled as any]: (state, {payload}) => {
            state.errorMessage = null;
            state.value = payload.value;
            state.isLoading = false;
        },
        [getPixelValue.rejected as any]: (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false;
        }
    }
})

// export const {setCurrentUser} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPixelValue = (state: RootState) => state.pixel.value;
export const selectIsLoadingPV = (state: RootState) => state.pixel.isLoading;
export const selectErrorMessagePV = (state: RootState) => state.pixel.errorMessage;


export default pixelValueSlice.reducer;