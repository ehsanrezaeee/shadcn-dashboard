// store
import { RootState } from "./../store";

// store/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// models/User.ts

import Cookies from "js-cookie";

// axios instance
import { UserApi, AuthApi } from "@/lib/api/index";

export interface User {
  userInfo: {
    base: { message: string; status: number };
    result: {
      res: boolean;
      user_info: {
        address: string;
        user_id: string;
        first_name: string;
        last_name: string;
        national_code: string;
        set_two_factor: boolean;
        user_type: string;
        role: string;
        phone_number: string;
        date_of_birth: string;
      };
    };
  };
}

export interface UserState {
  userData: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userData: null,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const accToken = Cookies.get("CTA1") as string;

    // @ts-ignore
    const userInfo = await UserApi.info(true, id === 1, {});

    return { userInfo };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      // @ts-ignore
      state.userData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      if (action.error && typeof action.error.message === "string") {
        state.error = action.error.message;
      } else {
        state.error = "Could not fetch user data";
      }
    });
  },
});

export const { clearUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;
