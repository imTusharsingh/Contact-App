import { call, put, takeLatest } from "redux-saga/effects"
import { postContactCall, getContactCall } from "../../apiCall"
import { getContactSuccess } from "../../actions/GetContactsAction"
import { postContactFailure, postContactSuccess } from "../../actions/PostContactAction"
import { POST_CONTACT_REQUEST } from "../../contactTypes"


function* postContact(action) {
    try {
        const addedData = yield call(postContactCall, action.payload)
        yield put(postContactSuccess())
        const newData = yield call(getContactCall)
        yield put(getContactSuccess(newData))
    } catch (error) {
        yield put(postContactFailure(error.message))
    }

}

export function* addSaga() {
    yield takeLatest(POST_CONTACT_REQUEST, postContact)
}