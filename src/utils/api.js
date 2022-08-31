import axios from "axios";
import {toast} from "react-toastify";

export const handleLogin = async (loginurl,logindata) =>{
    try{
        const res = await axios.post(loginurl,logindata);
        console.log(res);
        if(res.status===201){
          handleSuccess(res.data.message);
          localStorage.setItem('token',res.data.token);
          return true;
        }
    }catch(err){
      console.log(err);
        handleError(err.response.data.message);
        return false;
    }
};

export const handleSignup = async (signupurl,signupdata)=>{
  try{
    const res = await axios.post(signupurl,signupdata);
    if(res.status===201){
      handleSuccess(res.data);
      return true;
    }
  }catch(err){
    handleError(err.response.data.message);
    return false;
  }
}

export const cryptoList = async (apiUrl,authKey)=>{
  try{
    const res = await axios.get(apiUrl,{},authKey);
    console.log(res);
  }catch(err){
    console.log(err);
  }
}

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

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }