import { createSlice } from '@reduxjs/toolkit'
import createUser from './asynReducers/createUser';
import fetchAllUsers from './asynReducers/fetchAllUsers';


const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        allUsers: [],
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
        createUser(builder)
        fetchAllUsers(builder)
    },

});

// export const userActions = userSlice.actions;
export const {verifyEmailErr} = userSlice.actions;
export default userSlice;