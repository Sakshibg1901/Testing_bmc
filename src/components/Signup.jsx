import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@bmc.com+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 content-center border border-gray-400 h-105  w-105 pl-10 pt-8 pb-8 space-y-3 w-[350px] flex flex-col justify-center">
      <div>
        <p className="font-semibold text-3xl  tracking-wide content-center mb-4">
          Signup
        </p>
      </div>
      <div className="mr-5">
        <p className="text-zinc-600 content-center font-semibold  border-gray-400">
          Username
        </p>
      </div>

      <div className="mb-1 pr-6">
        <input
          className="outline-none content-center h-10 px-5border border-sm w-full ontent-center border border-gray-10  pr-4"
          id="email"
          type="email"
          name="email"
          placeholder="Enter username"
          onChange={handleChange}
          value={formData.email}
        />
        {errors.email && (
          <span className="text-red-500 text-xs italic">{errors.email}</span>
        )}
      </div>
      <div className="mb-2 pr-6">
        <label className="text-zinc-600 font-semibold " htmlFor="password">
          Password
        </label>
        <input
          className="outline-none h-10 px-5border border-sm w-full content-center border border-gray-10"
          id="password"
          type="password"
          name="password"
          placeholder="Enter the password"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && (
          <span className="text-red-500 text-xs italic">{errors.password}</span>
        )}
      </div>
      <div className="mb-2 pr-6">
        <label
          className="text-zinc-600 font-semibold "
          htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="outline-none h-10 px-5border border-sm w-full content-center border border-gray-10"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs italic">
            {errors.confirmPassword}
          </span>
        )}
      </div>
      {/* <div className="pr-6"> */}
      <button
        className="bg-orange-600  h-10 rounded-full  hover:bg-orange-400 duration-300 w-80% text-white font-semibold mt-3 pr-6 mr-7"
        type="submit">
        Signup
      </button>

      <p className="text-center mt-4 ">
        Already Account Exits?{" "}
        <span className="text-blue-500 font-semibold text-1xl underline ">
          <Link to="/">Login</Link>
        </span>
      </p>
    </form>
  );
};

export default Signup;
