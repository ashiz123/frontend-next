import axios from "axios";
import { VehicleDataInterface } from "../interfaces/VehicleDataInterface";
import { ParkingResult } from "./type";


export const fetchReservation = async(vehicleData: VehicleDataInterface, option : ParkingResult) => {

  let reservationData;
  if (option.type === "lot") {
    reservationData = {
      ...vehicleData,
      lot_id: option.id, 
    };
  } else if (option.type === "section") {
    reservationData = {
      ...vehicleData,
      lot_id: option.lot_id,  
      section_id: option.id,  
    };
  }

  console.log('reservation data', reservationData);

  try{
        const response = await axios.post(
            "/api/v1/entry_vehicle", reservationData,
            {
              headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
              },
            }
          )

          console.log('fetch response',response);
          return response;
          
    }
    catch(error){
        console.log(error);

    }

}