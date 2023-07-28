import {createSlice} from ' @reduxjs/toolkit'



export const alertSlice = createSlice({
    name:"alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showLoaing:(state)=>{
            state.loading=true},
           hideLoading:(state)=>{
            state.loading=false

           } 
    }
})

export  const{showLoaing,hideLoading} = alertSlice.actions