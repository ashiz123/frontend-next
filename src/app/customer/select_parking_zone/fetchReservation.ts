import axios from "axios";
import { VehicleDataInterface } from "../interfaces/VehicleDataInterface";
import { getCurrentTime } from "../utils/getCurrentTime";

interface BaseReservationData extends VehicleDataInterface {
  lot_id: number;
  entry_time: string;
  status: number;
}

interface ReservationDataWithSection extends BaseReservationData {
  section_id: number;
}


type ReservationData = BaseReservationData | ReservationDataWithSection;


export const fetchReservation = async(vehicleData: VehicleDataInterface, lotId : number, section_id?: number) => {


  let reservationData : ReservationData;
  console.log(section_id);

  if(!section_id){

     reservationData = {
      ...vehicleData,
      lot_id: lotId, 
      entry_time : getCurrentTime(),
      status : 1
    } as BaseReservationData
  }else
  {
    console.log('testing');
      reservationData = {
        ...vehicleData,
        lot_id: lotId, 
        section_id : section_id,
        entry_time : getCurrentTime(),
        status : 1
    } as ReservationDataWithSection

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

        console.log(response);
       return response.data;
         
          
    }
    catch(error){
        console.log(error);
       throw error;
    }

}