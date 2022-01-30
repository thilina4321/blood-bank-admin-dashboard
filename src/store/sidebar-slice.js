import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0, sidebarShow: true, sidebarUnfoldable: false };

const sidebarSlice = createSlice({
  name: "sidebar-slice",
  initialState,
  reducers: {
    set(state, action) {
      state.sidebarShow = action.payload.sidebarShow;
    },
    unflod(state, action) {
      state.sidebarUnfoldable = action.payload.sidebarUnfoldable;
    },
    increase(state) {
      state.count++;
    },
    decreaseByFive(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export default sidebarSlice;
export const sidebarActions = sidebarSlice.actions;
