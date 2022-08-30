import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

function Description(){
    return(
        <div className="flex flex-col justify-center gap-6 ml-10 pr-2 w-full">
            <BoxOne />
            <BoxTwo />
        </div>
    );
}

export default Description;