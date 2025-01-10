
import axiosClient from "../../components/axiosClient";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiHeaders =  {
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
} 

export const fetchLotsByUserId = async(userId : number) => {

    try{
        const response = await axiosClient.get(`${apiBaseUrl}/parking_lots/${userId}`, apiHeaders);
        if(response.status === 200){
            return response.data;
        }
    }

    catch(error){
        console.log(error);
        return error;

    }   
  
}


