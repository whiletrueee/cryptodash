import Info from "../svg/info";

function BoxTwo({ data }) {
  return (
    <div className="">
      <div className="">
        <div className="text-gray-500 text-sm xl:mb-2">{`Bitcoin Price (BTC)`}</div>
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="text-xl xl:text-3xl font-bold">
            $
            {data.price.USD.price.toLocaleString("en-US", {
              maximumFractionDigits: 3,
            })}
          </div>
          <div className="bg-green-500 py-1 px-2 text-white font-semibold rounded-md text-xs xl:text-sm">
            {data.price.USD.volume_change_24h.toFixed(2)}%
          </div>
          <div className="text-gray-600 bg-gray-300 px-[0.3rem] py-[0.1rem] rounded-md text-xs xl:text-sm">
            24h
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
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
            $
            {data.price.USD.market_cap.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </div>

          <div className="flex flex-col mt-[0.2rem] xl:hidden">
            <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
              Fully Diluted Market Cap <Info />
            </div>
            <div className="text-gray-700 text-sm xl:text-lg font-bold">
              $
              {data.price.USD.fully_diluted_market_cap.toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="text-green-500 font-bold text-xs xl:text-base">
            {data.price.USD.market_cap_dominance.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
            %
          </div>
        </div>

        <div className="hidden xl:flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Fully Diluted Market Cap <Info />
          </div>
          <div className="text-gray-700 text-lg font-bold">
            $
            {data.price.USD.fully_diluted_market_cap.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </div>
          {/* <div className="text-green-500 font-bold text-base">0.29%</div> */}
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Volume
            <Info />
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
            $
            {data.price.USD.volume_24h.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="text-green-500 font-bold text-xs xl:text-base">
            {data.price.USD.percent_change_24h.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
            %
          </div>

          <div className="mt-3">
            <div className="text-xs text-gray-600">Volume / Market cap</div>
            <div className="text-gray-700 text-sm font-bold">
              {(
                data.price.USD.volume_24h / data.price.USD.market_cap
              ).toLocaleString("en-US", {
                maximumFractionDigits: 4,
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Circulating Supply
            <Info />
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
            {data.circulating_supply.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            {data.symbol}
          </div>

          <div className="mt-3 flex flex-row justify-between w-full">
            {data.max_supply && (
              <>
                <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
                  Max Supply
                  <Info />
                </div>
                <div className="text-gray-700 text-xs xl:text-sm font-bold ml-2">
                  {data.max_supply} BTC
                </div>
              </>
            )}
          </div>

          <div className="flex flex-row justify-between w-full">
            {data.total_supply && (
              <>
                <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
                  Total Supply
                  <Info />
                </div>
                <div className="text-gray-700 text-xs xl:text-sm font-bold ml-2">
                  {data.total_supply.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {data.symbol}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxTwo;
