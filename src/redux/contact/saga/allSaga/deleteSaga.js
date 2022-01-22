import { call, put, takeLatest } from "redux-saga/effects"
import { deleteContactCall, getContactCall } from "../../apiCall"
import { getContactSuccess } from "../../actions/GetContactsAction"
import { deleteContactSuccess, deleteContactFailure } from "../../actions/DeleteContactAction"
import { DELETE_CONTACT_REQUEST } from "../../contactTypes"


function* deleteContact(action) {
    try {
        const data = yield call(deleteContactCall, action.payload)
        yield put(deleteContactSuccess())
        const newData = yield call(getContactCall)
        yield put(getContactSuccess(newData))
    } catch (error) {
        yield put(deleteContactFailure(error.message))
    }
}

export function* deleteSaga() {
    yield takeLatest(DELETE_CONTACT_REQUEST, deleteContact)
}