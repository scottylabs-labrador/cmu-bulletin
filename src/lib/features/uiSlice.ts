import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { setUserId } from 'firebase/analytics';

interface UIState {
  isModalOpen: boolean;
}

const initialState: UIState = {
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsModalOpen(state, action) {
        state.isModalOpen = action.payload;
    },
  },
});

export const {
    setIsModalOpen,
} = uiSlice.actions;
export default uiSlice.reducer;
