import {
    POST_CONTACT_FAILURE, POST_CONTACT_SUCCESS, POST_CONTACT_REQUEST
} from "../contactTypes"
import axios from "axios"
import { fetchContact } from "./GetContactsAction"


export const postContactRequest = (data) => {
    return {
        type: POST_CONTACT_REQUEST,
        payload: data
    }
}

export const postContactSuccess = () => {
    return {
        type: POST_CONTACT_SUCCESS
    }
}

export const postContactFailure = (data) => {
    return {
        type: POST_CONTACT_FAILURE,
        payload: data
    }
}

export const postContact = (data) => {
    return (dispatch) => {
        dispatch(postContactRequest())
        axios.post("http://localhost:3005/contact", data).then(res => {
            dispatch(postContactSuccess())
            dispatch(fetchContact())
        }).catch(err => {
            dispatch(postContactFailure(err.message))
        })
    }
}