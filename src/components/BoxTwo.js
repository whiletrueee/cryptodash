import DownSVG from "../svg/downSVG";
import Info from "../svg/info";
import UpSVG from "../svg/UpSVG";

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
          <div
            className="py-1 px-2 text-white font-semibold rounded-md text-xs xl:text-sm flex flex-row items-center justify-between"
            style={{
              backgroundColor:
                data.price.USD.volume_change_24h.toFixed(2) > 0
                  ? "rgb(34,197,94)"
                  : "red",
            }}
          >
            {data.price.USD.volume_change_24h > 0 ? <UpSVG /> : <DownSVG />}{" "}
            {Math.abs(data.price.USD.volume_change_24h.toFixed(2))}%
          </div>
          <div
            title="24 Hour volume change"
            className="text-gray-600 bg-gray-300 px-[0.3rem] py-[0.1rem] rounded-md text-xs xl:text-sm"
          >
            24h
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="mt-4 flex flex-row justify-start h-full border-t-[0.1rem] border-gray-200">
        <div className="flex flex-col gap-1 grow pr-3 pl-2 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Market Cap
            <div title="market cap is calculated by multiplying the total number of coins that have been mined by the price of a single coin at any given time. ">
              <Info />
            </div>
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
          <div
            className="font-bold text-xs xl:text-base"
            style={{
              color:
                data.price.USD.market_cap_dominance.toFixed(2) > 0
                  ? "rgb(34,197,94)"
                  : "red",
            }}
          >
            {Math.abs(data.price.USD.market_cap_dominance.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            }))}
            %
          </div>
        </div>

        <div className="hidden xl:flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            Fully Diluted Market Cap
            <div title="the total value of the crypto at today's price if the entire future supply of coins were in circulation. ">
              <Info />
            </div>
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
            <div title="Volume refers to how much - in monetary terms - a given cryptocurrency has traded over a period of time. Volume is important because it has such a significant impact on price from both an absolute and relative perspective.">
              <Info />
            </div>
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
            $
            {data.price.USD.volume_24h.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </div>
          <div
            className="font-bold text-xs xl:text-base"
            style={{
              color:
              data.price.USD.percent_change_24h > 0
                  ? "rgb(34,197,94)"
                  : "red",
            }}
          >
            {Math.abs(data.price.USD.percent_change_24h.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            }))}
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
            <div title="The total number of coins or tokens that are actively available for trade and are being used in the market and in general public. When a company creates a particular number of tokens, only a portion of it instead of the whole supply is made available for circulation.">
              <Info />
            </div>
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
                  <div title="refers to the maximum number of coins or tokens that will be ever created. This means that once the maximum supply is reached, there won't be any new coins mined, minted or produced in any other way.">
                    <Info />
                  </div>
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
                  <div title="The total number of tokens that exist on the blockchain, including tokens that aren't in public circulation. When a cryptocurrency project launches a new token or coin, they might create lots more crypto than they distribute at that moment.">
                    <Info />
                  </div>
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
