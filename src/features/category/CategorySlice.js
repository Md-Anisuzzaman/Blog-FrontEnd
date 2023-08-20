import { createSlice } from '@reduxjs/toolkit'
import fetchAllCategory from './asynReducers/fetchAllcategory';
import fetchCategory from './asynReducers/fetchCategory';
import updateCategory from './asynReducers/updateCategory';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        allCategories: [],
        category: {},
        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {   
        fetchAllCategory(builder)
        fetchCategory(builder)
        updateCategory(builder)
    },

});

export const userActions = categorySlice.actions;
export default categorySlice;