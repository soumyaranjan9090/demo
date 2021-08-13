// import axios from 'axios'
import data from '../../components/Packages.json'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
    } from './userTypes'



export const fetchUsersRequest = () => {
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure = error => {
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUsersSuccess(data))
// axios
// .get('https://restcountries.eu/rest/v2/all')
// .then(response=>{
//     const users = response.data
//     dispatch(fetchUsersSuccess(users))
// })
// .catch(error =>{
//     const errorMsg = error.message
//     dispatch(fetchUsersFailure(errorMsg))
// })
    }
}