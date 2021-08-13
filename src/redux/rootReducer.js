import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import useReducer  from './user/userReducer'

const rootReducer = combineReducers ({
    cake:cakeReducer,
    user:useReducer
})

export default rootReducer