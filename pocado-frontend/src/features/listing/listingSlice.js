import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  lisitings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = listingSlice.actions;
export default listingSlice.reducer;
