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
            console.log(event.target.parentNode.childNodes[1].classList.toggle("d-none"));

            state.isBlogsMangament = action.payload.isBlogsMangament
        },
        setUsersToggle: (state, action) => {
            state.isUsersMangament = action.payload
        },
        setSidebarToggle: (state, action) => {
            state.isSidebarOpen = action.payload
        },
        setMenuToggle: (state, action) => {
            event.target.parentNode.childNodes[1].classList.toggle("d-none");
        }

    },
    extraReducers: (builder) => {
    },

});

export const { setBlogsToggle, setMenuToggle, setUsersToggle, setSidebarToggle } = settingSlice.actions;
export default settingSlice;