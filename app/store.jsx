import { configureStore } from "@reduxjs/toolkit";
import reqModalSlice from "../components/ReqModal/reqModalSlice";
import UserSlice from "../components/SearchForm/UserSlice";
import userModalSlice from "../components/UserModal/userModalSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    userModal: userModalSlice,
    reqModal: reqModalSlice,
  },
});
