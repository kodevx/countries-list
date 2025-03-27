import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {
        setUserDetails: (state, action) => {
            return {
                ...state,
                userList: [ 
                    ...state.userList,
                    { userName: action.payload.userName, password: action.payload.password }
                ]
            }
        }
    }
});

export const { setUserDetails } = usersSlice.actions;

export default usersSlice.reducer;
