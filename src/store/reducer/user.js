import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState:{
        isAuth: false,
        token:'',
        data:{},
        date:'',
        time:'',
        location:'',
        premiere:'',
        title:'',
        tickets:'',
        price:''
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
        },
        confirmationdate(state, actions){
            return{
                ...state,
                date: actions.payload.date,
                time: actions.payload.time,
                locations: actions.payload.locations,
                premiere: actions.payload.premiere
            }
        },
        confirmationseats(state,actions) {
            return {
                ...state,
                title: actions.payload.title,
                tickets: actions.payload.tickets,
                price: actions.payload.price
            }
        }
    }
})

export const {login, logout, confirmationdate, confirmationseats}=userSlice.actions
export default userSlice.reducer