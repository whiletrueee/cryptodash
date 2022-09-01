function BoxOne({ data }) {
  const urls = Object.entries(data.urls);

  const urlListing = urls.map((item) => {
    if (item[1].length !== 0) {
      return (
        <a href={`${item[1][0]}`} target="_blank" rel="noopener noreferrer">
          <div className="font-medium text-xs xl:text-sm flex flex-row justify-between items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:cursor-pointer hover:transition-transform hover:scale-105 hover:ease-in-out hover:text-blue-900">
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
          </div>
        </a>
      );
    } else {
      return null;
    }
  });

  let i = 0;
  const tagsListing = data.tags.map((item) => {
    if (i < 5) {
      i = i + 1;
      return (
        <div className="bg-gray-200 text-gray-700 text-xs px-[0.5rem] py-[0.25rem] xl:px-3 xl:py-2 rounded-lg font-semibold">
          {item}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="flex flex-col justify-between gap-1">
      <div className="flex flex-row gap-4 items-center">
        <div className="w-[7%]">
          <img
            className="w-full drop-shadow-lg rounded-full"
            src={`${data.logo}`}
            alt={`${data.slug}`}
          />
        </div>
        <div className="text-2xl xl:text-4xl font-bold">{data.name}</div>
        <div className="bg-gray-200 text-gray-700 text-sm py-1 px-2 font-medium rounded-lg">
          {data.symbol}
        </div>
        <div className="p-1 rounded-md border-[0.1rem] border-gray-300">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3 h-3 xl:w-6 xl:h-6 text-gray-400 hover:cursor-pointer"
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
        clipRule="evenodd"
      />
    </svg>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-2 mt-1 items-center">
        <div className="bg-gray-500 text-gray-100 px-2 py-1 rounded-md text-xs xl:text-sm">
          Rank #{data.rank}
        </div>
        <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs xl:text-sm">
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
        </div> */}

        {urlListing}
      </div>

      <div className="flex flex-col justify-between gap-1 mt-2">
        <div className="">Tags:</div>
        <div className="flex flex-row flex-wrap justify-start gap-[0.2rem] items-center">
          {tagsListing}
          <div className="bg-gray-300 text-gray-700 text-xs px-[0.5rem] py-[0.25rem] xl:px-3 xl:py-2 rounded-lg font-semibold hover:cursor-pointer">
            View all
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxOne;
