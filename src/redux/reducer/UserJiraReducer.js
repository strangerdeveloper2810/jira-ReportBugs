import {} from "../constants/JiraReportBugsConstants/UserJiraConstants"
const initialState = {};

const UserJiraReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default UserJiraReducer;
