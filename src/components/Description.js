import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

function Description(props){
    return(
        <div className="h-[80%] max-w-[64%] hidden lg:flex flex-col justify-between gap-6 ml-1 lg:ml-5 xl:ml-10 pr-2 w-full my-auto">
            <BoxOne data={props.data[props.index]} />
            <BoxTwo data={props.data[props.index]} />
        </div>
    );
}

export default Description;