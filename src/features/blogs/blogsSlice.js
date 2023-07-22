import { createSlice } from '@reduxjs/toolkit'
import fetchAllBlogs from './asynReducers/fetchAllBlogs';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        allBlogs: [],
        blogs: {},
        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {   
        fetchAllBlogs(builder)
    },

});

export const userActions = blogsSlice.actions;
export default blogsSlice;