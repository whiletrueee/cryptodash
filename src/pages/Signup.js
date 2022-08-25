import { useState } from "react";
import { Link } from "react-router-dom";
import CButton from "../components/Button";
import { signupSchema } from "../validation/ClientValid";
import { ToastContainer, toast } from "react-toastify";
import { handleSignup } from "../utils/api";
import "react-toastify/dist/ReactToastify.css";
import endpoints from "../utils/constant";

import { ThreeDots } from "react-loader-spinner";
import { LineWave } from "react-loader-spinner";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colorCircle, setColorCircle] = useState("[#F4F4FA]");
  const [colorBorder, setColorBorder] = useState("border-slate-900");
  const [colorBg, setColorBg] = useState("bg-slate-900");
  const [load, setLoad] = useState(false);
  const [signupSuccess, setsignupSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const signupUrl = process.env.REACT_APP_AUTHURL + endpoints.signup;

  const handleError = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    let signupdata = {
      email: email,
      password: password,
    };

    const isValid = await signupSchema.isValid(signupdata);
    console.log(isValid);

    if (isValid) {
      setLoad(true);
      const response = await handleSignup(signupUrl, signupdata);
      if (response) {
        setLoad(false);
        setColorCircle("slate-900");
        setColorBorder("border-green-500");
        setColorBg("bg-green-500");
        setsignupSuccess(true);

        setTimeout(()=>{
          setRedirect(true);
        },4000);

      } else {
        setLoad(false);
        setColorCircle("slate-900");
        setColorBorder("border-red-500");
        setColorBg("bg-red-500");
      }
    } else {
      handleError("Enter valid credentials !");
      setColorCircle("slate-900");
      setColorBorder("border-red-500");
      setColorBg("bg-red-500");
    }
  };

  return (
    <div className="h-[90vh] bg-[#F4F4FA] flex flex-row justify-center items-center">
      <div
        className={`border-[0.3rem] ${colorBorder} h-[85%] w-[40vw] flex flex-col justify-center items-center rounded-xl relative shadow-slate-400 shadow-2xl`}
      >
        <div
          className={`h-[1.8rem] w-[9rem] ${colorBg} rounded-b-2xl absolute top-0 flex flex-row justify-center items-center gap-2`}
        >
          {load ? (
            <ThreeDots
              height="40"
              width="40"
              radius="6"
              color="#F4F4FA"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <>
              <div className={`rounded-full bg-${colorCircle} h-2 w-2`}></div>
              <div className={`rounded-full bg-${colorCircle} h-2 w-2`}></div>
              <div className={`rounded-full bg-${colorCircle} h-2 w-2`}></div>
            </>
          )}
        </div>
        {redirect ? (
          <>
            <div>Account Created Logging You in . . . . </div>
            <LineWave
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          </>
        ) : (
          <>
            <h1 className="text-slate-900 text-4xl font-semibold pb-5">
              Signup
            </h1>
            <form className="flex flex-col mt-5 gap-7 w-[70%]">
              <div className="flex flex-col">
                <label className="text-xl text-gray-500 pb-2">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setColorCircle("[#F4F4FA]");
                    setColorBorder("border-slate-900");
                    setColorBg("bg-slate-900");
                  }}
                  placeholder="example@mail.com"
                  className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-2 text-gray-500 font-semibold rounded-sm"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-xl text-gray-500 pb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setColorCircle("[#F4F4FA]");
                    setColorBorder("border-slate-900");
                    setColorBg("bg-slate-900");
                  }}
                  placeholder="min 6 characters"
                  className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-2 text-gray-500 font-semibold rounded-sm"
                />
              </div>
              <CButton
                label={
                  load && !signupSuccess
                    ? `Registering User`
                    : signupSuccess
                    ? `Redirecting . . .`
                    : `Submit`
                }
                textsize="lg"
                py="2"
                btnClick={handleSubmit}
                type="Submit"
                disable={
                  load && !signupSuccess ? true : signupSuccess ? true : false
                }
              />
            </form>
            <ToastContainer />
            <p className="text-slate-400 mt-5">
              Already have an account ?{" "}
              <Link to="/login" className=" text-slate-600 hover:text-sky-700">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;
