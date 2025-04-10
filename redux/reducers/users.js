import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    name: '',
    token: null,
    isSignedIn: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            console.log("action: ",action);
            return {
                ...state,
                userList: [ 
                    ...state.userList,
                    {  name: action.payload.name, token: action.payload.token }
                ]
            }
        },
        setToken: (state, action) => {
            console.log("action: ",action);
            return {
                ...state,
                // name: action.payload.name,
                // token: action.payload.token,
                // isSignedIn: true
            }
        },
        removeToken: (state, action) => {
            console.log("action: ",action);
            return {
                ...state,
                name: '',
                token: null,
                isSignedIn: false
            }
        } 
    }
});

export const { 
    setUserDetails, 
    setToken, 
    removeToken 
} = usersSlice.actions;

export default usersSlice.reducer;
