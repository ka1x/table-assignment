import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../types";

const initialState: FilterState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ field: keyof FilterState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
