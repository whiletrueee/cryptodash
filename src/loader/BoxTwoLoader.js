function BoxTwoLoader() {
  return (
    <div className="">
      <div className="">
        <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md xl:mb-2"></div>
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-[7rem] h-[2rem] bg-slate-500 animate-pulse rounded-md">
          </div>
          <div className="bg-green-500 w-[2.8rem] h-[1.3rem] animate-pulse rounded-md">
          </div>
          <div className="bg-slate-300 w-[1.7rem] h-[1rem] animate-pulse rounded-sm">
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="mt-4 flex flex-row justify-start h-full border-t-[0.1rem] border-gray-200">

        <div className="flex flex-col gap-1 grow pr-3 pl-2 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center">
            <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
          <div className="w-[7rem] h-[1rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>

          <div className="flex flex-col mt-[0.2rem] xl:hidden">
            <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
            <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
            </div>
            <div className="text-gray-700 text-sm xl:text-lg font-bold">
            <div className="w-[7rem] h-[1rem] bg-slate-500 animate-pulse rounded-md"></div>
            </div>
          </div>
          <div className="bg-green-500 w-[2.7rem] h-[1rem] animate-pulse rounded-md">
          </div>
        </div>

        <div className="hidden xl:flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
          <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          <div className="text-gray-700 text-lg font-bold">
          <div className="w-[7rem] h-[1rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          {/* <div className="text-green-500 font-bold text-base">0.29%</div> */}
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start border-r-[0.1rem] border-gray-200 h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
          <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
          <div className="w-[7rem] h-[1rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          <div className="bg-green-500 w-[3rem] h-[1rem] animate-pulse rounded-md">
          </div>

          <div className="mt-3">
            <div className="w-[3rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
            <div className="w-[4rem] h-[0.8rem] bg-slate-600 animate-pulse rounded-md mt-1">
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 grow pr-3 pl-3 pt-4 justify-center items-start h-fit">
          <div className="flex flex-row gap-1 items-center text-gray-500 text-sm">
          <div className="w-[4rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>
          <div className="text-gray-700 text-sm xl:text-lg font-bold">
          <div className="w-[7rem] h-[1rem] bg-slate-500 animate-pulse rounded-md"></div>
          </div>

          <div className="mt-3 flex flex-row justify-between w-full">
              <>
                <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
                <div className="w-[3rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
                </div>
                <div className="w-[4rem] h-[0.8rem] bg-slate-600 animate-pulse rounded-md">
                  
                </div>
              </>
          </div>

          <div className="flex flex-row justify-between w-full">
              <>
              <div className="flex flex-row gap-1 items-center text-gray-500 text-xs">
              <div className="w-[3rem] h-[0.8rem] bg-slate-500 animate-pulse rounded-md"></div>
              </div>
              <div className="w-[4rem] h-[0.8rem] bg-slate-600 animate-pulse rounded-md">
                
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxTwoLoader;
