import axios from 'axios';

export const API_BASE_URL = 'https://my-json-server.typicode.com/M-Afzaal-Afzal/peerstu-Api/';

export const client  = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})