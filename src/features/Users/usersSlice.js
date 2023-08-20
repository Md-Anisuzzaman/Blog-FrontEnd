import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        users: [],
        user: {},
        userInfo: {},
        formErrors: {},
        selectedUsers: [],
        searchKey: '',
        paginate: 10,
        currentPage: 1,
        isLoading: false,
        isError: false,
        error_for: '',
        error_msg: '',
        success_for: '',
        success_msg: '',
        error: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        
    },

});

// export const userActions = userSlice.actions;
export const {verifyEmailErr} = userSlice.actions;
export default userSlice;