function CryptoList(props) {
  const listItems = props.data.map((item) => {
    return (
      <div className="flex flex-row justify-between items-center border-b-2 lg:border-b-gray-200 py-4 pr-3 hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:border-b-slate-900 " onClick={()=>{props.index(item.rank-1)}}>

        <div className="flex flex-row justify-start items-center">
          <div className="px-2 w-fit">
            <img
              className="w-[70%] rounded-full"
              src={`${item.logo}`}
              alt={`${item.slug}`}
            />
          </div>
          <div className="xl:pl-1">
            <div className="text-lg xl:text-xl">{item.symbol}</div>
            <div className="text-xs xl:text-sm">{item.name}</div>
          </div>
        </div>

        <div className="xl:pl-1">
          <div className="text-base xl:text-xl font-semibold text-gray-800">${item.price.USD.price.toLocaleString('en-US', {maximumFractionDigits:2})}</div>
          <div className="text-xs xl:text-sm text-right">
            {item.category}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full lg:w-[22%] pl-1 mt-2">
      <input
        type="text"
        placeholder="Search"
        className="w-[30%] lg:w-full bg-transparent focus:outline-none focus:outline-slate-200 rounded-sm py-1 px-3"
      />

      <div className="pr-5 pb-1 lg:pr-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 lg:flex flex-col lg:mt-5 overflow-y-scroll h-[90%]">
        {/* <div className="flex flex-row justify-between items-center border-b-2 border-b-gray-200 py-4 pr-3 hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:border-b-slate-900">
          <div className="flex flex-row justify-start items-center">
            <div className="icon px-2 w-[40%]">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt="bitcoin"
              />
            </div>
            <div className="pl-3">
              <div className="text-xl">BT</div>
              <div className="text-sm">Bitcoin</div>
            </div>
          </div>
          <div className="pl-1">
            <div className="text-xl">5.0400000</div>
            <div className="text-sm text-right">$35,758.19</div>
          </div>
        </div> */}
        {listItems}
      </div>
    </div>
  );
}

export default CryptoList;
