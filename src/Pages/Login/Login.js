import React from "react";
import styled from "./Login.module.css";
import * as Yup from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { siginJiraReportBugActions } from "../../redux/action/JiraReportBugActions";
import { NavLink } from "react-router-dom";
function Login(props) {
  const { errors, handleChange, handleSubmit } = props;
  return (
    <div
      className="container flex justify-center"
      style={{
        background: " linear-gradient(90deg, #c7c5f4, #776bcc)",
        minHeight: 711,
      }}
    >
      <div className={styled.screen}>
        <div className="flex flex-col items-center justify-center mt-6">
          <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Login Jira-Report Bugs
          </span>
        </div>
        <div className={styled.screenContent}>
          <form className={styled.login} onSubmit={handleSubmit}>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-user" />
              </div>
              <input
                type="text"
                className={styled.loginInput}
                placeholder="User name / Email"
                name="email"
                onChange={handleChange}
              />
              <p className="text-xl text-red-600">{errors.email}</p>
            </div>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-lock" />
              </div>
              <input
                type="password"
                className={styled.loginInput}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <p className="text-xl text-red-600">{errors.password}</p>
            </div>

            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mt-5"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Log In Now
              </span>
            </button>
          </form>

          <div className={styled.socialLogin}>
            <NavLink to="/register">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </NavLink>

            <div className={styled.socialIcons}>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="screenBackground">
          <span className="screenBackgroundShape" id="screenBackgroundShap4" />
          <span className="screen BackgroundShape" id="screenBackgroundShap3" />
          <span className="screenBackgroundShape" id="screenBackgroundShap2" />
          <span className="screenBackgroundShape" id="screenBackgroundShap1" />
        </div>
      </div>
    </div>
  );
}

const LoginWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must have min 6 characters")
      .max(32, "Password have max 32 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { email, password } = values;
    props.dispatch(siginJiraReportBugActions(email, password));
  },
})(Login);

export default connect()(LoginWithFormik);
