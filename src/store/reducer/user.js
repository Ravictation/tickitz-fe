import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState:{
        isAuth: false,
        token:'',
        data:{},
        date:'',
        time:'',
        premiere:'',
        title:'',
        tickets:'',
        price:'',
        seats:'',
        scheduleid:''
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
        confirmationdetails(state, actions){
            return{
                ...state,
                title: actions.payload.title,
                tickets: actions.payload.tickets,
                price: actions.payload.price,
                date: actions.payload.date,
                time: actions.payload.time,
                premiere: actions.payload.premiere,
                scheduleid: actions.payload.scheduleid
            }
        },
        confirmationseats(state,actions) {
            return {
                ...state,
                
                seats: actions.payload.seats,
               
            }
        },
        addData(state, actions) {
            return {
                ...state,
                data: actions.payload

            }
        }
    }
})

export const {login, logout, confirmationdetails, confirmationseats, addData}=userSlice.actions
export default userSlice.reducer