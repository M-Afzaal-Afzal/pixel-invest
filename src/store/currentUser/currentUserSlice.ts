import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
import userInterface from "../../interfaces/userInterface";
import {client} from "../../services/base.api";

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
         return await client.get('/myAccount')
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err.message);
                throw (err.message);
            });
    }
)

export const currentUserSlice = createSlice({
    name: 'currentUser',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
       setUserLogout: (state) => {
           state.user = null;
       }
    },
    //asynchronout reduceers goes there in estra reducers
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
            state.errorMessage = action.error.message;
            state.isLoading = false;
        }
    }
})

// action can be exported like that, as it it this easy because of redux toolkit

export const {setUserLogout} = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type


export const selectCurrentUser = (state: RootState) => state.currentUser.user;
export const selectIsLoadingCU = (state: RootState) => state.currentUser.isLoading;
export const selectErrorMessageCU = (state: RootState) => state.currentUser.errorMessage;

export default currentUserSlice.reducer