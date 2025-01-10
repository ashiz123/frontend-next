import axios from "axios";
import { LotInterface, ParkingResult, SectionInterface } from "./type";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
};



 export const fetchLotsOrSectionsByLotId = async(lot_id: number) => {

  try{
    const response = await axios.get(`/api/v1/parking_lot/${lot_id}`, axiosConfig);

    let result : ParkingResult[];
    if(response.data[0].grouped === 1){
      const sections = await fetchSections(lot_id);
      result = sections.map((section: SectionInterface) => ({
        id : section.id,
        lot_id : lot_id,
        name: section.section_name,
        type : 'section',
        total_spaces : section.total_spots,
        occupied_spaces : section.occupied_spaces,
        vehicle_allow_type : section.vehicle_allow_type
      }));
       }else{
      result = response.data.map((lot : LotInterface ) => ({
        id : lot.id,
        name : lot.name,
        type: 'lot',
        total_spaces : lot.total_spots,
        occupied_spaces : lot.occupied_spaces,
        vehicle_allow_type : lot.vehicle_allow_type
      }));
    }

    return result;
  }

  catch(error){
     console.log(error);
  }

 }

  const fetchSections = async(parking_lot_id: number) => {
    try{
        // await new Promise((resolve) => setTimeout(resolve, 20000));
        const response = await axios.get(`/api/v1/parking_sections_by_lotId/${parking_lot_id}`, axiosConfig);

          if(response.status === 200){
            console.log(response.data);
            return response.data;
          }
    }

    catch(error){
        console.error('Error fetching data', error);
        throw error;
    }
   

   
  }