import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const getAllcategoryApi = async () => {
    const res = await axiosInstance.get('/api/category/allcategory');
    return res.data;
}

export const asyncFetchAllCategory = createAsyncThunk('category/fetchAllCategory', async () => {
    try {
        const category = await getAllcategoryApi();
        console.log("asyncFetchAllCategory", category);
        return category;
    } catch (error) {
        console.log("asyncFetchAllCategories kno error --> ", error.message);
    }
});

const fetchAllCategory = (builder) => {
    builder.addCase(asyncFetchAllCategory.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchAllCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.allCategories = payload;
    }).addCase(asyncFetchAllCategory.rejected, (state, action) => {
        state.isLoading = false
        state.allCategories= [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchAllCategory;