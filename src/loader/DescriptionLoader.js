import BoxOneLoader from "./boxOne";
import BoxTwoLoader from "./BoxTwoLoader";

function DescriptionLoader(props){
    return(
        <div className="h-[80%] max-w-[64%] hidden lg:flex flex-col justify-between gap-6 ml-1 lg:ml-5 xl:ml-10 pr-2 w-full my-auto">
            <BoxOneLoader />
            <BoxTwoLoader />
        </div>
    );
}

export default DescriptionLoader;