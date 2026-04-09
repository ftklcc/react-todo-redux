import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visible: false,
    message: "",
    type: ""
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.visible = true;
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        hideAlert: (state, action) => {
            state.visible = false;
            state.message = "";
            state.type = "";
        }
    }
})

export const { showAlert, hideAlert } = alertSlice.actions
export default alertSlice.reducer