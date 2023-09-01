import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen">
      <Header />
      <div className="flex justify-center ">
        <form className="flex flex-col bg-black w-1/4 rounded-md content-center mt-36 h-[27rem]">
          <span className=" text-white p-5 mt-8 text-2xl font-bold ml-8 ">
            Login
          </span>
          <input
            type="text"
            placeholder="Email address"
            className=" text-white p-3 m-5 ml-10 rounded-md bg-slate-700 w-80"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white p-3 m-5 ml-10 rounded-md bg-slate-700 w-80"
          />
          <button className="bg-red-500 text-white p-3 m-5 w-80 ml-10 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
