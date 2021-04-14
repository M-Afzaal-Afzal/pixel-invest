import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

// all these functions are in api.ts also and also are in separate files in this same folder
// if you want all these async functions in a single folder, or in a single file here it is. You can choose one of them.

export const getBiggestAccounts = createAsyncThunk(
    'biggestAccounts/getBiggestAccounts',
    async () => {
        return client.get('/biggestAccounts')
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

export const getOpenOffers = createAsyncThunk(
    'openOffers/getOpenOffers',
    async () => {
        return client.get('/openOffers')
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

export const getOpenOrders = createAsyncThunk(
    'openOrders/getOpenOrders',
    async () => {
        return client.get('/openOrders')
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

export const getPixelValue = createAsyncThunk(
    'pixelValue/getPixelValue',
    async () => {
        return client.get('/pixel')
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