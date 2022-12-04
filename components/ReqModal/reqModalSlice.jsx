import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const reqModalSlice = createSlice({
  name: "reqModal",
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setOpen } = reqModalSlice.actions;
export default reqModalSlice.reducer;
