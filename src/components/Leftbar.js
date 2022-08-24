import ArrowDown from "../svg/arrowDown";
import ArrowUp from "../svg/arrowUp";
import Fullscreen from "../svg/fullscreen";

function Leftbar() {
  return (
    <div className="h-[100%] w-[7%] bg-slate-900 ml-4 rounded-xl flex flex-col justify-around items-center">
        <Fullscreen />
      <div className="flex flex-col gap-1 justify-center items-center">
        <ArrowUp />
        <div className="text-gray-300">1</div>
        <ArrowDown />
      </div>
    </div>
  );
}

export default Leftbar;
