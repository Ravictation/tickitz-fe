import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState:{
        isAuth: false,
        token:'',
        data:{},
    },
    reducers:{
        login(state, actions){
            return{
                ...state,
                isAuth: true,
                token: actions.payload
            }
        },

        logout(state, actions){
            return{
                ...state,
                isAuth:false,
                token:'',
                data:{}
            }
        }
    }
})

export const {login, logout}=userSlice.actions
export default userSlice.reducer