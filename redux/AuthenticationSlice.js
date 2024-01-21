import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    userName:"",
    userEmail:"",
    userRole:"",
    loading:false,
    errorMessage:"", 
    serverCredentials:{
        api_key:"",
        secret_key:"",
    }
}


export const logInUser = createAsyncThunk("user/logInUser", async(userDetails, thunkApi)=>{
    try {

        const response = await fetch("/login", {
            method:"POST",
            body:JSON.stringify(userDetails)
        })

        const res =  await response.json()
        return res
    } catch (error) {
        throw new Error
    }
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(logInUser.pending, (state)=>{
                state.loading = true,
                state.errorMessage =""
            })
            .addCase(logInUser.fulfilled, (state, action)=>{
                state.loading = false,
                state.errorMessage ="",
                state.userEmail = action.payload.email,
                state.serverCredentials = {
                    api_key: action.payload.api_key,
                    secret_key:action.payload.secret_key,
                }
                state.userName = "John Doe",
                state.userRole = "ADMIN"
            })
            .addCase(logInUser.rejected, (state)=>{
                state.loading = false,
                state.errorMessage ="Could not log in user"
            })
    }
})

export default userSlice.reducer