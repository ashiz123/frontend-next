import { VehicleDataInterface } from "@/interfaces/VehicleDataInterface";
import axios from "axios";



export const fetchCheckVehicleStatus = async(data: VehicleDataInterface) => {
    try{
        const response = await axios.get(`http://localhost:3000/api/v1/check_vehicle_status/${data.vehicle_reg}`, {
            headers : {
              'Content-Type' : 'application/json'
            }
          });

          if(response.status === 200){
            console.log(response.data);
            return response.data;
          }
    }
    catch(error){
        console.error('Cannot fetch status of the vehicle in parking');
        throw error;
    }   
}