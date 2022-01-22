import {
    FETCH_CONTACT_FAILURE, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_REQUEST,
    POST_CONTACT_FAILURE, POST_CONTACT_SUCCESS, POST_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS, DELETE_CONTACT_REQUEST, DELETE_CONTACT_FAILURE,
    PUT_CONTACT_REQUEST, PUT_CONTACT_SUCCESS, PUT_CONTACT_FAILURE
} from "../contactTypes";

const initialValue = {
    loading: false,
    contact: [],
    error: null
}


export const getContactReducer = (state = initialValue, action) => {
    switch (action.type) {
        case FETCH_CONTACT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case FETCH_CONTACT_SUCCESS: return {
            ...state, loading: false, contact: action.payload, error: null
        }
        case FETCH_CONTACT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        case POST_CONTACT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case POST_CONTACT_SUCCESS: return {
            ...state, loading: false, error: null
        }
        case POST_CONTACT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        case DELETE_CONTACT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case DELETE_CONTACT_SUCCESS: return {
            ...state, loading: false, error: null
        }
        case DELETE_CONTACT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        case PUT_CONTACT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case PUT_CONTACT_SUCCESS: return {
            ...state, loading: false, error: null
        }
        case PUT_CONTACT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }


}

