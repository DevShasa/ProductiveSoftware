import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchHomepageData = createAsyncThunk("homepageData/fetch", async(_,thunkApi )=>{
    
    const {user} = thunkApi.getState()
    try {

        const response = await fetch("/homepagedata",{
            method:"GET",
            headers:{
                api_key: user.serverCredentials.api_key,
                secret_key:user.serverCredentials.secret_key
            }
        })

        const res =  await response.json()
        return res
    } catch (error) {
        throw new Error
    }
})

export const homepageData = createSlice({
    name:"homepageData", 
    initialState: {
        loading: false,
        errorMessage:"",
        data:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchHomepageData.pending, (state)=>{
                state.loading = true,
                state.errorMessage =""
            })
            .addCase(fetchHomepageData.fulfilled, (state, action)=>{
                state.loading = false,
                state.errorMessage ="",
                state.data = action.payload
            })
            .addCase(fetchHomepageData.rejected, (state)=>{
                state.loading = false,
                state.errorMessage ="Could not log in user"
            })
        }
})

export default homepageData.reducer