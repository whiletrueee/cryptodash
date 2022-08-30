import axios from "axios";

export const CryptoData = async (url,number)=>{
    const {data} = await axios.get(`${url+number}`);
    console.log(data[0].rank);
    return data;
}