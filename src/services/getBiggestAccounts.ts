import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

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