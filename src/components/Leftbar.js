import ArrowDown from "../svg/arrowDown";
import ArrowUp from "../svg/arrowUp";
import Fullscreen from "../svg/fullscreen";

function Leftbar(props) {
  return (
    <div className="h-[97%] w-[10%] md:w-[5%] bg-slate-900 ml-4 my-auto rounded-xl flex flex-col justify-around items-center">
        <Fullscreen />
      <div className="flex flex-col gap-1 justify-center items-center">
        <ArrowUp />
        <div className="text-gray-300">{props.number}</div>
        <ArrowDown />
      </div>
    </div>
  );
}

export default Leftbar;
