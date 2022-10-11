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
  name,
  phoneNumber
) => ({
  type: USER_REGISTER_API,
  userRegister: {
    email: email,
    password: password,
    name: name,
    phoneNumber: phoneNumber,
  },
});
