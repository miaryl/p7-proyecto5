import axios from "axios";

const apiCLient = axios.create({
    baseURL: "http://localhost:3000"
});

export const api = ()=>{
    const url = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";

    const getTarot =()=>{
        return axios.get(url);
    };

    const getLastUser = () =>{
        return apiCLient.get("/users?_sort=id&_order=desc&_limit=1")
        .then(res => res.data[0]);
    }
    
    const getLastFiveUsers = () =>{
        return apiCLient.get("/users?_sort=id&_order=desc&_limit=5")
        .then(res => res.data);
    }

    const addReading = (userId, cardIds) =>{
        return apiCLient.get(`/users/${userId}`).then(res=>{
            const user = res.data;
            const readings = user.readings ? [...user.readings] : [];
            readings.push({
                id: readings.length +1,
                cards: cardIds,
                date: new Date().toISOString()
            });
            return apiCLient.put(`/users/${userId}`, {...user, readings});
        });

    };

    const getUser = (userId) => {
       return apiCLient.get(`/users/${userId}`).then(res => res.data);
    };

    const getAllUsers= () =>{
        return apiCLient.get("/users").then(res => res.data);
    };

    return{
        getTarot,
        addReading,
        getLastUser,
        getLastFiveUsers,
        getUser,
        getAllUsers
    };
};