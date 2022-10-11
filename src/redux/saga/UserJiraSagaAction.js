import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  USER_SIGNIN_API,
  USER_LOGIN_ACTION,
  USER_REGISTER_API,
} from "../constants/JiraReportBugsConstants/UserJiraConstants";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../constants/LoadingConstants/LoadingConstants";
import { JiraAPIServices } from "../../services/JiraServices";
import {
  STATUS_CODE,
  TOKEN,
  USER_LOGIN,
} from "../../util/constants/systemSetting";
import history from "../../util/history";
import Swal from "sweetalert2";

function* signinSaga(action) {
  const { userLogin } = action;
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(1500);
    let { data, status } = yield call(() => {
      return JiraAPIServices.signinApi(userLogin);
    });

    if (status === STATUS_CODE.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Account Success!",
      });
      // Lưu vào localStorage
      localStorage.setItem(TOKEN, data.content.accessToken);

      localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

      yield put({
        type: USER_LOGIN_ACTION,
        userLogin: data.content,
      });

      history.push("/home");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}

function* registerSaga(action) {
  const { userRegister } = action;

  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(1500);
    let { status } = yield call(() => {
      return JiraAPIServices.signupApi(userRegister);
    });

    if (status === STATUS_CODE.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Register Account Success!",
      });
      history.push("/login");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionRegister() {
  yield takeLatest(USER_REGISTER_API, registerSaga);
}
