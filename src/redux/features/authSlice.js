import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
        console.log(action);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        // state.error = action.payload.message;
        console.log(action);
      });
  },
});

export default authSlice.reducer;
