import { takeLatest } from "redux-saga/effects";
import {USER_SIGNIN_API} from "../constants/JiraReportBugsConstants/UserJiraConstants"
function * signinSaga(action) {
    console.log(action);
}


export function * actionSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}