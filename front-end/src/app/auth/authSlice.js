import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  message: "",
};

export const registerUser = createAsyncThunk(
  "/register",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/register",
        formData
      );

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "/login",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData
      );

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.token));

      return data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateInfo = createAsyncThunk(
  "user/update",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const { data } = await axios.put(
        `http://localhost:4000/api/auth/update/${id}`,
        userData,
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(data));

      return data;
    } catch (err) {
      console.error("Error updating user:", err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.message || "Update failed");
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.message = "Account created successfully";
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = "Cannot create this account";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.message = "Logged in successfully";
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Invalid credentials";
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.message = "Updated successfully";
        state.error = null;
      })
      .addCase(updateInfo.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update";
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
