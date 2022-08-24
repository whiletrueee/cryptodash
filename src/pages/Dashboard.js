import CryptoList from "../components/CryptoList";
import Description from "../components/Description";
import Leftbar from "../components/Leftbar";

function Dashboard(){
    return(
        <div className="h-[95%] flex flex-row justify-start">
          <Leftbar />
          <CryptoList />
          <Description />
        </div>
    );
}

export default Dashboard;