import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUpForEmployer } from "../../apis";

const initialState = {
    userSignInDetails: undefined,
    userSignUpDetails: undefined,

}

// reducers
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        userLoginSuccess: (state, action) => {
            state.userSignInDetails = action.payload;
        },
        userLoginFailure: (state, action) => {
            state.userSignInDetails = undefined;
        },
        userSignUpSuccess: (state, action) => {
            state.userSignUpDetails = action.payload;
        },
        userSignUpFailure: (state, action) => {
            state.userSignUpDetails = undefined;
        },
    }
});

const { reducer, actions } = userSlice;

const { userLoginSuccess, userLoginFailure, userSignUpSuccess, userSignUpFailure } = actions;

export default reducer;

export const SignIn = (userSignInDetails: Object) => async (dispatch: any) => {
    try {
        const response = await signIn(userSignInDetails);
        if (response) {
            dispatch(userLoginSuccess(response));
        } else {
            dispatch(userLoginFailure("Login failed!"));
        }
    } catch (error: any) {
        dispatch(userLoginFailure("Server Not Available"));
    }
}

export const SignUpForEmployer = (userSignUpDetails: Object) => async (dispatch: any) => {
    try {
        const response = await signUpForEmployer(userSignUpDetails);
        if (response) {
            dispatch(userSignUpSuccess(response));
        } else {
            dispatch(userSignUpFailure("SignUp failed!"));
        }
    } catch (error: any) {
        dispatch(userSignUpFailure("Server Not Available"));
    }
}