import useState, { useEffect } from 'react';
import { CryptoData } from "../utils/cryptodata";

function CryptoList() {

  useEffect(()=>{
    (async () => {
      const res = await CryptoData();
      console.log(res);
    })();
  },[]);

  
  return (
    <div className="w-[25%] pl-10 mt-2">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent focus:outline-none border-gray-300 focus:outline-slate-300 rounded-sm py-1 px-3"
      />

      <div className="mt-5 overflow-y-scroll h-[90%]">

        <div className="flex flex-row justify-between items-center border-b-2 border-b-gray-200 py-4 pr-3 hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:border-b-slate-900">
          <div className="flex flex-row justify-between items-center">
            <div className="icon px-2">Logo</div>
            <div className="pl-3">
              <div className="text-xl">BTC</div>
              <div className="text-sm">Bitcoin</div>
            </div>
          </div>
          <div className="pl-1">
            <div className="text-xl">5.0400000</div>
            <div className="text-sm text-right">$35,758.19</div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center border-b-2 border-b-gray-200 py-4 pr-3 hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:border-b-slate-900">
          <div className="flex flex-row justify-between items-center">
            <div className="icon px-2">Logo</div>
            <div className="pl-3">
              <div className="text-xl">BTC</div>
              <div className="text-sm">Bitcoin</div>
            </div>
          </div>
          <div className="pl-1">
            <div className="text-xl">5.0400000</div>
            <div className="text-sm text-right">$35,758.19</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CryptoList;
