import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "./base.api";

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