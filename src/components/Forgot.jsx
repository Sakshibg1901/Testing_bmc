import React, { useState } from "react";
import { Link } from "react-router-dom";
// additional code for smtp
// import sendEmail from "./email";

const Forgot = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    setErrors(errors);
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form
      alert("Link sent on mail!");
    }
  };

  return (
    <form onSubmit={handleSubmit  }
     className="bg-slate-100 content-center border border-gray-400 h-80 w-96 pl-10 space-y-3 w-[350px] flex flex-col justify-center">

      <div>
        <p className="font-semibold text-2xl  tracking-wide text-left mb-4">
          Forgot Password
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
     
      {/* <div className="pr-6"> */}
      <button 
        className="bg-orange-600  h-10 rounded-full  hover:bg-orange-400 duration-300 w-80% text-white font-semibold mt-2 pr-6 mr-6"
        type="submit">
        Link Send on email
      </button>
      
      <p className="text-center mt-4 ">
            Go back to login{" "}
            <span className="text-blue-500 font-semibold text-1xl underline ">
              <Link to="/">Login</Link>
            </span>
          </p>
    </form>
  );
};



export default Forgot;

