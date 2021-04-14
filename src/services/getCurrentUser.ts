import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

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
