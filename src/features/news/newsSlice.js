import { createSlice } from '@reduxjs/toolkit'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        allNews: [],
        news: {},
        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {   
    },

});

export const userActions = newsSlice.actions;
export default newsSlice;