import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../features/settings/settingSLice";
import blogsSlice from "../features/blogs/blogsSlice";
import categorySlice from "../features/category/CategorySlice";
import userSlice from "../features/Users/usersSlice";

export const store = configureStore({
    reducer: {
        settings: settingSlice.reducer,
        blogStore: blogsSlice.reducer,
        userStore: userSlice.reducer,
        categoryStore: categorySlice.reducer
    }
})