import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerJiraReportBugActions } from "../../redux/action/JiraReportBugActions";
function Register(props) {
  const { errors, handleChange, handleSubmit } = props;
  return (
    <div>
      <section className="bg-gray-50 dark:bg-cyan-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Register Jira-Report Bugs
          </span>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={handleChange}
                  />
                  <p className="text-xl text-red-600">{errors.email}</p>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                  />
                  <p className="text-xl text-red-600">{errors.password}</p>
                </div>

                <div>
                  <label
                    htmlFor="Your Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                  />
                  <p className="text-xl text-red-600">{errors.fullName}</p>
                </div>

                <div>
                  <label
                    htmlFor="Phone Number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                  />
                  <p className="text-xl text-red-600">{errors.phoneNumber}</p>
                </div>

                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mt-5"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create Account
                  </span>
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <NavLink to="/login">
                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here
                    </span>
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const RegisterWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid"),

    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must have min 6 characters")
      .max(32, "Password have max 32 characters"),
    fullName: Yup.string().required("Name is required!"),
    phoneNumber: Yup.string()
      .required("Phone Number  is required!")
      .max(10, "Phone Number have max 10 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { email, password, fullName, phoneNumber } = values;
    props.dispatch(
      registerJiraReportBugActions(email, password, fullName, phoneNumber)
    );
  },
})(Register);

export default connect()(RegisterWithFormik);
