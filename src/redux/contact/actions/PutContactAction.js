import { PUT_CONTACT_REQUEST, PUT_CONTACT_SUCCESS, PUT_CONTACT_FAILURE } from "../contactTypes";
import axios from "axios";
import { fetchContact } from "./GetContactsAction";


export const putContactRequest = (data) => {
    return {
        type: PUT_CONTACT_REQUEST,
        payload: data
    }
}

export const putContactSuccess = () => {
    return {
        type: PUT_CONTACT_SUCCESS
    }
}

export const putContactFailure = (error) => {
    return {
        type: PUT_CONTACT_FAILURE,
        payload: error
    }
}

export const putContact = (data) => {
    return (dispatch) => {
        dispatch(putContactRequest())
        axios.put("http://localhost:3005/contact/" + data.id, data).then(res => {
            console.log(res)
            dispatch(putContactSuccess())
            dispatch(fetchContact())
        }).catch(err => {
            dispatch(putContactFailure(err.message))
        })
    }
}