// src/redux/formSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type Form = {
  name: string;
  email: string;
};

const formSlice = createSlice({
  name: "form",
  initialState: [] as Form[],
  reducers: {
    submitForm: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
