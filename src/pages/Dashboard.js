import CryptoList from "../components/CryptoList";
import Description from "../components/Description";
import Leftbar from "../components/Leftbar";
import { useQuery } from "@tanstack/react-query";
import { CryptoData } from "../utils/cryptodata";
import { useState } from "react";
import CryptoListLoader from "../loader/cryptolistLoader";

function Dashboard() {
  const url = process.env.REACT_APP_DATAURL;
  let number = 1;
  const [index, setIndex] = useState(0);

  const { data, error, isError, isLoading } = useQuery(["list"], () =>
    CryptoData(url, number)
  );


  return (
    <div className="h-[98%] flex flex-row justify-start gap-5">
      <Leftbar number={number} />
      {isLoading && <CryptoListLoader />}
      {!isLoading && (
        <>
          <CryptoList data={data} index={setIndex} />
          <Description data={data} index={index} />
        </>
      )}
      {isError && <div>{error}</div>}
    </div>
  );
}

export default Dashboard;
