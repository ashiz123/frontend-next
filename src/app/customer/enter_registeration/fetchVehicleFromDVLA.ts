import axios from "axios";



export const fetchVehicleFromDvla = async(registrationNumber : string) => {

    try{
        const response = await axios.post('/api/v1/get_vehicle_reg', {registrationNumber} , {
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        });
        console.log(response);
        return response.data;

    }

    catch(error){
        console.log('error registeration', error);
        throw error;
    }
    
}