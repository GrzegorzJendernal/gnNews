import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/App/store";

interface PopupState {
	[key: string]: boolean;
}

interface NewsState {
	listView: boolean;
	popup: PopupState;
}

const initialState: NewsState = {
	listView: true,
	popup: {},
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		changeView: state => {
			state.listView = !state.listView;
		},
		showPopup: (state, action: PayloadAction<string>) => {
			const title = action.payload;
			state.popup[title] = !state.popup[title];
		},
	}
});

export const {changeView, showPopup} = newsSlice.actions;

const selectNewsState = (state: RootState) => state.news;

export const selectView = (state: RootState) => selectNewsState(state).listView;
export const selectPopup = (state: RootState) => selectNewsState(state).popup;

export default newsSlice.reducer;