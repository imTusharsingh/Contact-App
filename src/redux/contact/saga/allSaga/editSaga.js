import { call, put, takeLatest } from "redux-saga/effects"
import { putContactCall, getContactCall } from "../../apiCall"
import { getContactSuccess } from "../../actions/GetContactsAction"
import { putContactSuccess, putContactFailure } from "../../actions/PutContactAction"
import { PUT_CONTACT_REQUEST } from "../../contactTypes"

function* editContact(action) {
    try {
        const editedData = yield call(putContactCall, action.payload)
        yield put(putContactSuccess())
        const newData = yield call(getContactCall)
        yield put(getContactSuccess(newData))
    } catch (error) {
        yield put(putContactFailure(error.message))
    }
}

export function* editSaga() {
    yield takeLatest(PUT_CONTACT_REQUEST, editContact)
}