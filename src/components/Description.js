import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

function Description(props){
    return(
        <div className="max-w-[60%] flex flex-col justify-center gap-6 ml-10 pr-2 w-full">
            <BoxOne data={props.data[props.index]} />
            <BoxTwo data={props.data[props.index]} />
        </div>
    );
}

export default Description;