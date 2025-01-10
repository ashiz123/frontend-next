import axiosClient from "@/app/business/components/axiosClient";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  };


export const getLotId = async() => {
    try{
        const response = await axiosClient.get(`${apiBaseUrl}/parking_lots_by_auth_user`, axiosConfig);
        if(response.data.length > 0){
          console.log(response.data.length);
        } 
        return response;
    }
    catch(error){
        console.log(error);
        throw error;
    }


}