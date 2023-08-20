import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";



export const updateCategoryApi = async (formData) => {
    const res = await axiosInstance.post(`/api/category//updatecategory`, formData)
    return res.data;
}

export const asyncUpdateCategory = createAsyncThunk('blog/updateBlog', async (formData) => {
    try {
        const result = await updateCategoryApi(formData);
        return result;
    } catch (error) {
        console.log("From Update category Async error --> ", error.message);
    }
});

const updateCategory = (builder) => {
    builder.addCase(asyncUpdateCategory.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncUpdateCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.category = payload;
    }).addCase(asyncUpdateCategory.rejected, (state, action) => {
        state.isLoading = false
        state.category = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default updateCategory;