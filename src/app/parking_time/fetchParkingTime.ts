import axios from "axios";



export const fetchParkingTime = async(reg_num: string | null ) => {
    console.log(reg_num);
    try{    
        const response = await axios.get(`http://localhost:3000/api/v1/check_vehicle_status/${reg_num}`, {
            headers : {
                "Content-Type" : "application/json"
            }
        });
        
       console.log(response);
       return response.data; 

    }
    catch(error){
        console.log(error);
        throw new Error('Cannot fetch parking time');
    }
}

