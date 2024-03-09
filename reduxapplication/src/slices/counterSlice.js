import {createSlice} from '@reduxjs/toolkit'

export let counterSlice=createSlice(
    {
        name:'counter',
        initialState:{counter:100},
        reducers:{
            increementCounter:(state,action)=>{
                state.counter=state.counter+1
            },
            decreementCounter:(state,action)=>{
                state.counter=state.counter-1
            },
            changeCounterbyValue:(state,action)=>{

                state.counter=state.counter+action.payload

            }
        }
    }
)

export default counterSlice.reducer;

//create action creator functions 
export let {increementCounter,decreementCounter,changeCounterbyValue}=counterSlice.actions