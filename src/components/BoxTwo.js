import Info from "../svg/info";

function BoxTwo({data}) {
  return (
    <div className="">
      <div className="">
        <div className="text-gray-500 text-sm mb-2">{`Bitcoin Price (BTC)`}</div>
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="text-3xl font-bold">$213000</div>
          <div className="bg-green-500 py-1 px-2 text-white font-semibold rounded-md">
            0.23 %
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="mt-4 flex flex-row justify-start h-full border-t-[0.1rem] border-gray-200">
        <div className="flex flex-col gap-1 grow pr-3 pl-2 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Market Cap <Info />
          </div>
          <div className="text-gray-700 text-lg font-bold">$1233483487</div>
          <div className="text-green-500 font-bold text-base">0.29%</div>
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Fully Diluted Market Cap <Info />
          </div>
          <div className="text-gray-700 text-lg font-bold">$1233483487</div>
          <div className="text-green-500 font-bold text-base">0.29%</div>
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Volume
            <div className="text-gray-700 bg-gray-300 px-[0.3rem] py-[0.1rem] rounded-md ">
              24h
            </div>
            <Info />
          </div>
          <div className="text-gray-700 text-lg font-bold">$1233483487</div>
          <div className="text-green-500 font-bold text-base">0.29%</div>

          <div className="mt-3">
            <div className="text-xs text-gray-600">Volume / Market cap</div>
            <div className="text-gray-700 text-sm font-bold">1233</div>
          </div>
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Circulating Supply
            <Info />
          </div>
          <div className="text-gray-700 text-lg font-bold">19135650 BTC</div>

          <div className="mt-3 flex flex-row justify-between w-full">
            <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
              Max Supply
              <Info />
            </div>
            <div className="text-gray-700 text-sm font-bold ml-2">
              19135650 BTC
            </div>
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
              Total Supply
              <Info />
            </div>
            <div className="text-gray-700 text-sm font-bold ml-2">
              19135650 BTC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxTwo;
