//create redux store  
import CounterReducer from './slices/counterSlice'
import UserReducer from './slices/userSlice'
import {configureStore} from '@reduxjs/toolkit'

export let reduxStore=configureStore(
    {
        reducer:{
            counter:CounterReducer,
            users:UserReducer
        }
    }
)
