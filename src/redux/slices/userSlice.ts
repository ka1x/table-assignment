import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState, User } from "../types";

const initialState: UserState = {
  users: [] as User[],
  error: "",
  loading: true,
};

export const fetchUsers = createAsyncThunk<{ users: User[] }>(
  "users/fetchUsers",
  async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      //   console.log(response.data)
      const users: User[] = response.data.map((item: any) => ({
        name: item.name,
        username: item.username,
        email: item.email,
        phone: item.phone,
      }));
      return { users };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ??
          "Failed to fetch data. Please try again later.";
      });
  },
});

export default userSlice.reducer;
