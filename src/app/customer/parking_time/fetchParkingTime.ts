import axios from "axios";



export const fetchParkingTime = async(reg_num: string | null ) => {
  
    try{    
        const response = await axios.get(`/api/v1/check_vehicle_status/${reg_num}`, {
            headers : {
                "Content-Type" : "application/json"
            }
        });
        
       console.log('fetch parking time', response);
       return response.data; 

    }
    catch(error){
        console.log(error);
        throw new Error('Cannot fetch parking time');
    }
}

