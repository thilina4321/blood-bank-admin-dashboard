import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar-slice";

const store = configureStore({
  reducer: { sidebar: sidebarReducer.reducer },
});

export default store;
