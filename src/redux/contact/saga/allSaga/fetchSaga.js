import { call, put, takeLatest } from "redux-saga/effects"
import { getContactCall } from "../../apiCall"
import { getContactSuccess, getContactFailure } from "../../actions/GetContactsAction"
import { FETCH_CONTACT_REQUEST } from "../../contactTypes"


function* fetchContact(action) {
    try {
        const data = yield call(getContactCall)
        console.log(data)
        yield put(getContactSuccess(data))
    } catch (error) {
        yield put(getContactFailure(error.message))
    }
}

export function* fetchSaga() {
    yield takeLatest(FETCH_CONTACT_REQUEST, fetchContact)
}


