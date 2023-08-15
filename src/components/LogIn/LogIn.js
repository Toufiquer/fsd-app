"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const LogIn = () => {
  const [inputType, setInputType] = useState("password");
  const toggleType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, " => Line No: 5");
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={` w-full flex items-center justify-center`}
    >
      <div className=" bg-slate-800 card h-auto p-8 pt-12  min-w-[500px]">
        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
        </div>
        {/* Password */}
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>

          {/* include validation with required or other standard HTML validation rules */}
          <input
            type={inputType}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", { required: true })}
            placeholder="Your password"
          />
          <div className="absolute right-4 top-[38px]">
            {inputType === "password" ? (
              <AiFillEyeInvisible
                onClick={toggleType}
                className={` h-6 w-6 cursor-pointer`}
              />
            ) : (
              <AiFillEye
                onClick={toggleType}
                className={` h-6 w-6 cursor-pointer`}
              />
            )}
          </div>
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LogIn;
