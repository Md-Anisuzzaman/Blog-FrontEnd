import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const getSingleCategoryApi = async (id) => {
    const res = await axiosInstance.get(`/api/category/fetchcategory/${id}`);
    return res.data;
}

export const asyncFetchSingleCategory = createAsyncThunk('categories/fetchcategory', async (id) => {
    try {
        const category = await getSingleCategoryApi(id);
        return category;
    } catch (error) {
        console.log("asyncFetchSingleCategory kno error --> ", error.message);
    }
});

const fetchCategory = (builder) => {
    builder.addCase(asyncFetchSingleCategory.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchSingleCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.category = payload;
    }).addCase(asyncFetchSingleCategory.rejected, (state, action) => {
        state.isLoading = false
        state.category = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchCategory;