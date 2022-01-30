import { createSlice } from "@reduxjs/toolkit";
const initialState = { mountNumber: 0, faqs: [] };

const homeFaqSlice = createSlice({
  name: "home-page-faq",
  initialState,
  reducers: {
    setMountNumber(state, action) {
      state.mountNumber = action.payload;
    },
    addFaqs(state, action) {
      state.faqs = action.payload;
    },
    deleteFaq(state, action) {
      const remaininFaqs = state.faqs.filter((faq) => faq.id != action.payload);
      state.faqs = remaininFaqs;
    },
  },
});

export default homeFaqSlice;
export const homeFaqActions = homeFaqSlice.actions;
