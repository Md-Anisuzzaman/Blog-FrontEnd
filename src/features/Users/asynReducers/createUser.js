import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const createUserApi = async (formData) => {
    const jwt = Cookies.get('jwt');
    formData.jwt = jwt;
    const res = await axiosInstance.post('/api/user/resistration', formData)
    return res.data;
}

export const asyncCreateUser = createAsyncThunk('user/createUser', async (formData) => {
    try {
        const user = await createUserApi(formData);
        return user;
    } catch (error) {
        throw new Error(error);
    }
});

const createUser = (builder) => {
    builder.addCase(asyncCreateUser.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncCreateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
    }).addCase(asyncCreateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
    });


}
export default createUser;