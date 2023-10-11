import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../apis";

const initialState = {
    userDetails: undefined
}

// reducers
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        userLoginSuccess: (state, action) => {
            state.userDetails = action.payload;
        },
        userLoginFailure: (state, action) => {
            state.userDetails = undefined;
        }
    }
});

const { reducer, actions } = userSlice;

const { userLoginSuccess, userLoginFailure } = actions;

export default reducer;

export const SignIn = (userDetails: Object) => async (dispatch: any) => {
    try {
        const response = await signIn(userDetails);
        if (response) {
            dispatch(userLoginSuccess(response));
        } else {
            dispatch(userLoginFailure("Login failed!"));
        }
    } catch (error: any) {
        dispatch(userLoginFailure("Server Not Available"));
    }
}