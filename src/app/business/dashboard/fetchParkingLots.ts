

import axiosClient from "../components/axiosClient";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;




const fetchParkingLots = async() => {

    try{
        const response = await axiosClient.get(`${apiBaseUrl}/parking_lots_by_auth_user`,{
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(error);

    }

}


export default fetchParkingLots;