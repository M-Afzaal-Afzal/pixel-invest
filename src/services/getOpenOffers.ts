import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

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