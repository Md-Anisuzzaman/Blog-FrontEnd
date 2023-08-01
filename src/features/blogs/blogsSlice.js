import { createSlice } from '@reduxjs/toolkit'
import fetchAllBlogs from './asynReducers/fetchAllBlogs';
import fetchBlog from './asynReducers/fetchBlog';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        allBlogs: [],
        blog: {},
        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {   
        fetchAllBlogs(builder)
        fetchBlog(builder)
    },

});

export const userActions = blogsSlice.actions;
export default blogsSlice;