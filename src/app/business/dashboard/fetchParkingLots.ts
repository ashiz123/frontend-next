

import axiosClient from "../components/axiosClient";




const fetchParkingLots = async(userId: number) => {

    try{
        const response = await axiosClient.get(`http://localhost:3000/api/v1/parking_lots/${userId}`,{
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