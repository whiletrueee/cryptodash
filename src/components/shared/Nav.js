import { Link } from "react-router-dom";
import CButton from "../Button";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-5 px-5 bg-[#F4F4FA] items-center">
      <div className="px-2 text-slate-900 font-bold text-xl">Crypto Data</div>
      <div className="px-2 flex justify-between items-center">
        <div className="flex justify-between gap-5 px-5">
          <div className=" text-gray-400 hover:cursor-pointer hover:text-slate-900">About</div>
          <div className="text-gray-400 hover:cursor-pointer hover:text-slate-900">Social Handle</div>
        </div>
        <div className="buttons flex-row justify-around items-centers">
         <Link to="/login" className="mr-2"><CButton label="Login" textsize="md" py="2" /></Link>
         <Link to="/signup"><CButton label="Signup" textsize="md" py="2" /></Link>
         <Link to="/" className="ml-2"><CButton label="Home" textsize="md" py="2" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
