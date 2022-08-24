import axios from "axios";
import {toast} from "react-toastify";

export const handleLogin = async (loginurl,logindata) =>{
    try{
        const res = await axios.post(loginurl,logindata);
        // if(!res.data.success){
        //     handleError(res.data.message);
        // }else{
        //     handleSuccess(res.data.message);
        // }
        return res;
    }catch(err){
        console.log(err);
        handleError("oops! Something went wrong");
        return false;
    }
};

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