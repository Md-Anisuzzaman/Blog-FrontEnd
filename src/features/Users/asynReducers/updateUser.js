import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";



export const updateBlogApi = async (formData) => {
    const res = await axiosInstance.post(`/api/updateblog`, formData)
    return res.data;
}

export const asyncUpdateBlog = createAsyncThunk('blog/updateBlog', async (formData) => {
    try {
        const result = await updateBlogApi(formData);
        return result;
    } catch (error) {
        console.log("From Update blog Async error --> ", error.message);
    }
});

const updateBlog = (builder) => {
    builder.addCase(asyncUpdateBlog.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncUpdateBlog.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.blog = payload;
    }).addCase(asyncUpdateBlog.rejected, (state, action) => {
        state.isLoading = false
        state.blog = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default updateBlog;