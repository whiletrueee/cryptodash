import ArrowDown from "../svg/arrowDown";
import ArrowUp from "../svg/arrowUp";
import Fullscreen from "../svg/fullscreen";

function Leftbar(props) {

  return (
    <div className="h-[97%] w-[10%] md:w-[5%] bg-slate-900 ml-4 my-auto rounded-xl flex flex-col justify-around items-center">
      <Fullscreen />
      <div className="text-white">
        Incr
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <ArrowUp incr={props.incr} />
        <div className="text-gray-300 hover:cursor-default">{props.number}</div>
        <ArrowDown decr={props.decr} />
      </div>
    </div>
  );
}

export default Leftbar;
