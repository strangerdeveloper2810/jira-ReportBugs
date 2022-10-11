import {
  USER_SIGNIN_API,
  USER_REGISTER_API,
} from "../constants/JiraReportBugsConstants/UserJiraConstants";

export const siginJiraReportBugActions = (email, password) => ({
  type: USER_SIGNIN_API,
  userLogin: {
    email: email,
    password: password,
  },
});

export const registerJiraReportBugActions = (
  email,
  password,
  fullName,
  phoneNumber
) => ({
  type: USER_REGISTER_API,
  userRegister: {
    email: email,
    password: password,
    fullName: fullName,
    phoneNumber: phoneNumber,
  },
});
