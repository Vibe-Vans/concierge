
import  mapReducer  from "./mapReducer"
import {combineReducers} from 'redux'

//Combine Reducers

const rootReducer = combineReducers(
    {
      
        mapRed:     mapReducer,


    }
)

export default rootReducer;
