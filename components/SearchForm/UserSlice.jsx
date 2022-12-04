import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    info: null,
    isLoading: false,
    error: "",
    repos: [],
    currentRepo: null,
    currentPulls: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.value.info = payload;
      state.value.isLoading = false;
    },
    setIsLoading: (state, { payload }) => {
      state.value.isLoading = payload;
    },
    setRepos: (state, { payload }) => {
      state.value.repos = payload;
    },
    setCurrentRepo: (state, { payload }) => {
      state.value.currentRepo = payload;
    },
    setCurrentPulls: (state, { payload }) => {
      state.value.currentPulls = payload;
    },
    setError: (state, { payload }) => {
      state.value.error = payload;
    },
  },
});

export const {
  setUser,
  setIsLoading,
  setRepos,
  setCurrentRepo,
  setCurrentPulls,
  setError,
} = userSlice.actions;
export default userSlice.reducer;
