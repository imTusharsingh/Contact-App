import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./contact/saga/rootSaga"
import { composeWithDevTools } from "redux-devtools-extension"


import { getContactReducer, getsagaReducer } from "./contact/reducers/GetContactReducer"



const saga = createSagaMiddleware()
const middleware = [thunk, saga]

const rootReducer = combineReducers({
    contacts: getContactReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
saga.run(rootSaga)

export default store