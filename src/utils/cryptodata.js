import { cryptoList } from "./api";
import apiEndpoints from "./constant";

export const CryptoData = async ()=>{
    const apilist = process.env.REACT_APP_APIURLV1+apiEndpoints.list;
    const key = process.env.REACT_APP_APIKEY;
    const config={
        header:{
            "X-CMC_PRO_API_KEY":key
        }
    }
    const res = await cryptoList(apilist,config);
    console.log(res);
    return res;
}