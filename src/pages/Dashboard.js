import CryptoList from "../components/CryptoList";
import Description from "../components/Description";
import Leftbar from "../components/Leftbar";
import { useQuery } from "@tanstack/react-query";
import { CryptoData } from "../utils/cryptodata";
import { useState } from "react";

function Dashboard() {
  const url = process.env.REACT_APP_DATAURL;
  let number = 1;
  const [index,setIndex]=useState(0);

  // useEffect(() => {
  //   if (number > 20 || number < 0) {
  //     setNumber(1);
  //   }
  // }, [number]);

  const { data, error, isError, isLoading } = useQuery(["list"], () =>
    CryptoData(url, number)
  );

  if (isLoading) {
    return (
      <>
        <Leftbar number={number} />
        <div>Loading . . .</div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Leftbar number={number} />
        <div>{error}</div>
      </>
    );
  }

  return (
    <div className="h-[95%] flex flex-row justify-start gap-5">
      <>
        <Leftbar number={number} />
        <CryptoList data={data} index={setIndex} />
        <Description data={data} index={index} />
      </>
    </div>
  );
}

export default Dashboard;
