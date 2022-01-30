import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar-slice";
import homeFaqReducer from "./home/faq";

const store = configureStore({
  reducer: { sidebar: sidebarReducer.reducer, homeFaq: homeFaqReducer.reducer },
});

export default store;
