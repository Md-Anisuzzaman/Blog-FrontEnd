import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../features/settings/settingSLice";
import blogsSlice from "../features/blogs/blogsSlice";

export const store = configureStore({
    reducer: {
        settings: settingSlice.reducer,
        blogStore: blogsSlice.reducer
    }
})