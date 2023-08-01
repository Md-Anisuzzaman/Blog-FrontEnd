import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const getBlogApi = async (id) => {
    const res = await axiosInstance.get(`/api/fetchblog/${id}`);
    return res.data;
}

export const asyncFetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
    try {
        const blogs = await getBlogApi(id);
        return blogs;
    } catch (error) {
        console.log("asyncFetchAllBlogs kno error --> ", error.message);
    }
});

const fetchBlog = (builder) => {
    builder.addCase(asyncFetchBlog.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchBlog.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.blog = payload;
    }).addCase(asyncFetchBlog.rejected, (state, action) => {
        state.isLoading = false
        state.blog = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchBlog;