import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const userModalSlice = createSlice({
  name: "userModal",
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setOpen } = userModalSlice.actions;
export default userModalSlice.reducer;
