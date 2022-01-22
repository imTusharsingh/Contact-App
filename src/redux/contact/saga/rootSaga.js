import { all } from "redux-saga/effects"

// all saga
import { fetchSaga } from "./allSaga/fetchSaga"
import { addSaga } from "./allSaga/addSaga"
import { editSaga } from "./allSaga/editSaga"
import { deleteSaga } from "./allSaga/deleteSaga"


function* rootSaga() {
    yield all([fetchSaga(), deleteSaga(), addSaga(), editSaga()])
}

export default rootSaga;