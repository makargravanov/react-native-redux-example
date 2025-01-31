import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
}

const initialState: UserState = {
    email: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserEmail(state, action: { payload: string }) {
            state.email = action.payload;
        },
        logout(state) {
            state.email = null;
        },
    },
});

export const { setUserEmail, logout } = userSlice.actions;
export default userSlice.reducer;
