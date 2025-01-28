
import { ParkingLot } from "@/app/types/parkingLot";
import axios from "axios"

export const getAuthLot = async(accessToken :string) : Promise<ParkingLot>  => {
   try{
    const response = await axios.get('http://localhost:3000/api/v1/lot/getAuthLot', {headers : {
        "Accept" : "Application/json",
        "Content-Type"  : 'Application/json',
        "Authorization" : `Beared ${accessToken}`
    }});
    if(response.status === 200){
        console.log(response)
    }

    return response.data[0] ;
   }
   catch(error){
    console.log(error);
    throw new Error("Failed to fetch parking lot data");
   }


}   