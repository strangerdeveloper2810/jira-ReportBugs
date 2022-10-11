import { USER_SIGNIN_API } from "../constants/JiraReportBugsConstants/UserJiraConstants";

export const siginJiraReportBugActions = (email, password) => ({
  type: USER_SIGNIN_API,
  userLogin: {
    email: email,
    password: password,
  },
});
