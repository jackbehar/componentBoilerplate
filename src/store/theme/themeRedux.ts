import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import {ThemeVariant} from '../../types/theme';

interface ThemeState {
  theme: ThemeVariant;
}

const initialState: ThemeState = {
  theme: 'legacy' || Appearance.getColorScheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeVariant>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
