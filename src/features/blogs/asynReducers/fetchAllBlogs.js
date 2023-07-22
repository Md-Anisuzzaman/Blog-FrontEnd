import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const getAllBlogsApi = async () => {
    const res = await axiosInstance.get('/api/fetchblogs');
    console.log(res);
    return res.data;
}

export const asyncFetchAllBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    try {
        const blogs = await getAllBlogsApi();
        return blogs;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchAllBlogs = (builder) => {
    builder.addCase(asyncFetchAllBlogs.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchAllBlogs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.allBlogs = payload;
    }).addCase(asyncFetchAllBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.allBlogs = [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchAllBlogs;