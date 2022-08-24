import { useState } from "react";
import CButton from "../components/Button";
import { loginSchema } from "../validation/ClientValid";
import {ToastContainer} from "react-toastify";
import { handleLogin } from "../utils/api";
import 'react-toastify/dist/ReactToastify.css';
import endpoints from "../utils/constant";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUrl=process.env.REACT_APP_AUTHURL+endpoints.login;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);

    let logindata={
      "email":email,
      "password":password
    }

    const isValid = await loginSchema.isValid(logindata);
    console.log(isValid);

    if(isValid){
      const res = handleLogin(loginUrl,logindata);
      console.log(res);
    }

  }

  return (
    <div className="h-[90vh] bg-[#F4F4FA] flex flex-row justify-center items-center">
      <div className="border-slate-900 border-[0.3rem] h-[85%] w-[40vw] flex flex-col justify-center items-center rounded-xl relative shadow-slate-400 shadow-2xl">
        <div className="h-[1.8rem] w-[9rem] bg-slate-900 rounded-b-2xl absolute top-0 flex flex-row justify-center items-center gap-2">
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
          <ToastContainer />
        </div>
        <h1 className="text-slate-900 text-4xl font-semibold pb-5">Login</h1>
        <form className="flex flex-col mt-5 gap-7 w-[70%]">
          <div className="flex flex-col">
            <label className="text-xl text-gray-500 pb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="example@mail.com"
              className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-2 text-gray-500 font-semibold rounded-sm"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-xl text-gray-500 pb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="min 6 characters"
              className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-2 text-gray-500 font-semibold rounded-sm"
            />
          </div>
          <CButton label="Submit" textsize="lg" py="2" btnClick={handleSubmit} type="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
