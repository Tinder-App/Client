import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const host = "http://localhost:5000/api/auth/";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (usercredentails, { rejectWithValue }) => {
    try {
      const request = await axios.post(`${host}login`, usercredentails);
      const response = request.data;

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (usercredentails, { rejectWithValue }) => {
    try {
      const request = await axios.post(`${host}register`, usercredentails);
      const response = request.data;
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
