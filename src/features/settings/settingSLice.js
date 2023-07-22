import { createSlice } from '@reduxjs/toolkit'


const settingSlice = createSlice({
    name: 'settingStore',
    initialState: {
        isBlogsMangament: false,
        isSidebarOpen: false,
        isUsersMangament: false,
    },
    reducers: {
        setBlogsToggle: (state, action) => {
            state.isBlogsMangament = action.payload
        },
        setUsersToggle: (state, action) => {
            state.isUsersMangament = action.payload
        },
        setSidebarToggle: (state, action) => {
            state.isSidebarOpen = action.payload
        },

    },
    extraReducers: (builder) => {
    },

});

export const { setBlogsToggle, setUsersToggle, setSidebarToggle } = settingSlice.actions;
export default settingSlice;