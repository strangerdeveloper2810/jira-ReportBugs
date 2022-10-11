import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/rootSaga";
import LoadingReducer from "./reducer/LoadingReducer";
import UserJiraReducer from "./reducer/UserJiraReducer";
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    LoadingReducer,
    UserJiraReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;