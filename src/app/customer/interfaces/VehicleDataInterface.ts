import { VehicleApiInterface } from "./VehicleApiInterface";


export interface VehicleDataInterface{
  entry_time: string | null;      // Timestamp of the log entry
  vehicle_color: string | null;   // Color of the vehicle
  vehicle_make: string| null;    // Make of the vehicle (manufacturer)
  vehicle_reg: string | null;     // Registration number of the vehicle
  vehicle_type: string | null;    // Type classification of the vehicle (e.g., "M1")
  vehicle_year: string | null;
}



export const mapApiToVehicleData = (apiData : VehicleApiInterface) => {
    return {
      entry_time: null,
      vehicle_color: apiData.colour,
      vehicle_make: apiData.make,
      vehicle_reg: apiData.registrationNumber,
      vehicle_type: apiData.typeApproval,
      vehicle_year: apiData.yearOfManufacture,
    }
}


 