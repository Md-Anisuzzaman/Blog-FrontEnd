import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const getAllUsersApi = async () => {
    const res = await axiosInstance.get('/api/user/fetchusers');
    return res.data;
}

export const asyncFetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const blogs = await getAllUsersApi();
        return blogs;
    } catch (error) {
        console.log("asyncFetchAllUsers kno error --> ", error.message);
    }
});

const fetchAllUsers = (builder) => {
    builder.addCase(asyncFetchAllUsers.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.allUsers = payload;
    }).addCase(asyncFetchAllUsers.rejected, (state, action) => {
        state.isLoading = false
        state.allUsers = [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchAllUsers;