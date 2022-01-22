import { FETCH_CONTACT_REQUEST, FETCH_CONTACT_FAILURE, FETCH_CONTACT_SUCCESS } from "../contactTypes"
import axios from "axios"


export const getContactRequest = () => {
    return {
        type: FETCH_CONTACT_REQUEST
    }
}

export const getContactSuccess = (data) => {
    return {
        type: FETCH_CONTACT_SUCCESS,
        payload: data
    }
}

export const getContactFailure = (data) => {
    return {
        type: FETCH_CONTACT_FAILURE,
        payload: data
    }
}

export const fetchContact = () => {
    return (dispatch) => {
        dispatch(getContactRequest())
        axios.get("http://localhost:3005/contact").then(res => {
            dispatch(getContactSuccess(res.data))
        }).catch(err => {
            dispatch(getContactFailure(err.message))
        })
    }
}