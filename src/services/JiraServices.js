import axios from "axios";
import { DOMAIN } from "../util/constants/systemSetting";
export class JiraServices {
  constructor() {}

  signupApi = () => {
    return axios({
      url: `${DOMAIN}/Users/signup`,
      method: "POST",
    });
  };

  signinApi = (userLogin) => {
    return axios({
      url: `${DOMAIN}/Users/signin`,
      method: "POST",
      data: userLogin,
    });
  };
}

export const JiraAPIServices = new JiraServices();
