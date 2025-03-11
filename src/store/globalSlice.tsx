import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GlobalWatch } from "../interfaces/globalWatch";

interface GlobalState {
  loading: boolean;
  error: boolean;
  jsonFiltrado: GlobalWatch[];
  isModalOpen: boolean;
  currentModalData: GlobalWatch | null;
}

const initialState: GlobalState = {
  loading: true,
  error: false,
  jsonFiltrado: [],
  isModalOpen: false,
  currentModalData: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loadingSet: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    errorSet: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    jsonFiltradoSet: (state, action: PayloadAction<GlobalWatch[]>) => {
      state.jsonFiltrado = action.payload;
    },
    isModalOpenSet: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    currentModalDataSet: (state, action: PayloadAction<GlobalWatch | null>) => {
      state.currentModalData = action.payload;
    },
  },
});

export const { loadingSet, errorSet,jsonFiltradoSet, isModalOpenSet,currentModalDataSet } = globalSlice.actions;
export const selectGlobal = (state: RootState) => state.global;

export default globalSlice.reducer;
