import { all } from "redux-saga/effects";
import * as JiraAction from "./UserJiraSagaAction"
export function * rootSaga() {
    yield all([
        JiraAction.actionSignin(),
    ]);
}