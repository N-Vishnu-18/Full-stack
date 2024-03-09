import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


//make Api
export let userPromise=createAsyncThunk('users-data',async(thunkApi)=>{
    try{
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let userlist=await res.json()
        return userlist
    }
    catch(err){
        return thunkApi.rejectWithValue(err)
    }

})

export let userSlice=createSlice({
    name:"users",
    initialState:{users:[],ispending:false,erromessage:""} ,
    reducers:{
        clearState:(state,action)=>
        {
            state.users=[];
            state.ispending=false;
            state.erromessage="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(userPromise.pending,(state,action)=>{
                    state.ispending=true
        })
        .addCase(userPromise.fulfilled,(state,action)=>{
                //update users array
                state.users=action.payload;
                state.ispending=false
        })
        .addCase(userPromise.rejected,(state,action)=>{
            console.log(action)
            state.erromessage=action.error
            state.ispending=false

        })

    }
})

export default userSlice.reducer;
export let {clearState}=userSlice.actions