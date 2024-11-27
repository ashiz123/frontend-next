import { createContext } from "react";
import { VehicleDataInterface } from "@/interfaces/VehicleDataInterface";


export interface VehicleContextType {
    vehicleData: VehicleDataInterface ;
    setVehicleData: React.Dispatch<React.SetStateAction<VehicleDataInterface >>;
  }

  export const VehicleContext = createContext<VehicleContextType | undefined>(undefined)





