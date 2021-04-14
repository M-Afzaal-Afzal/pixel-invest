import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

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