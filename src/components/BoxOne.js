function BoxOne({data}) {
  const urls = Object.entries(data.urls);

  const urlListing = urls.map((item) => {
    if(item[1].length!==0){
      return(<a href={`${item[1][0]}`} target="_blank" rel="noopener noreferrer"><div className="font-medium text-sm flex flex-row justify-between items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:text-blue-900">
      {item[0]} Url
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
        className="w-4 h-4 text-blue-900 bg-blue-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </div></a>);
    }else{
      return null;
    }
  });


  return (
    <div className="flex flex-col justify-between gap-1">
      <div className="flex flex-row gap-4 items-center">
        <div className="">
          <img
            className="w-[90%]"
            src={`${data.logo}`}
            alt={`${data.slug}`}
          />
        </div>
        <div className="text-4xl font-bold">{data.name}</div>
        <div className="bg-gray-200 text-gray-700 text-sm py-1 px-2 font-medium rounded-lg">
          BTC
        </div>
        <div className="p-1 rounded-md border-[0.1rem] border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-2 mt-1">
        <div className="bg-gray-500 text-gray-100 px-2 py-1 rounded-md text-sm">
          Rank #{data.rank}
        </div>
        <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md">
          {data.category}
        </div>

        {/* <div className="font-semibold flex flex-row justify-between items-center gap-2 bg-blue-200 text-blue-600 px-3 py-1 rounded-md hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:text-blue-900">
          Website Url
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="w-4 h-4 text-blue-900 bg-blue-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>

        <div className="font-semibold flex flex-row justify-between items-center gap-2 bg-blue-200 text-blue-600 px-3 py-1 rounded-md hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:text-blue-900">
          Website Url
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="w-4 h-4 text-blue-900 bg-blue-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div> */}
        {urlListing}

      </div>

      <div className="flex flex-col justify-between gap-1 mt-2">
        <div className="">Tags:</div>
        <div className="flex flex-row justify-start gap-[0.2rem]">
          <div className="bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full font-semibold">
            Mineable
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxOne;
