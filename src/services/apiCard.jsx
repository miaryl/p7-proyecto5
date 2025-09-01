import axios from "axios";

export const api = ()=>{
    const url = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";

    const getTarot =()=>{
        const response = axios.get(url);
        return response;
    }

    return{
        getTarot
    }
}