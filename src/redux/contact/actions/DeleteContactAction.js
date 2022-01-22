import { DELETE_CONTACT_SUCCESS, DELETE_CONTACT_REQUEST, DELETE_CONTACT_FAILURE } from "../contactTypes";
import axios from "axios"
import { fetchContact } from "./GetContactsAction";

export const deleteContactRequest = (data) => {
    return {
        type: DELETE_CONTACT_REQUEST,
        payload: data
    }
}

export const deleteContactSuccess = () => {
    return {
        type: DELETE_CONTACT_SUCCESS
    }
}

export const deleteContactFailure = (error) => {
    return {
        type: DELETE_CONTACT_FAILURE,
        payload: error
    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        dispatch(deleteContactRequest())
        axios.delete("http://localhost:3005/contact/" + id).then(res => {
            console.log(res)
            dispatch(deleteContactSuccess())
            dispatch(fetchContact())
        }).catch(err => {
            dispatch(deleteContactFailure(err.message))
        })
    }
}