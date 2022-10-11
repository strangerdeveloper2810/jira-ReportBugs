import axios from "axios";
import { DOMAIN } from "../util/constants/systemSetting";
export class JiraServices {
  constructor() {}

  signupApi = (userRegister) => {
    return axios({
      url: `${DOMAIN}/Users/signup`,
      method: "POST",
      data: userRegister
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
