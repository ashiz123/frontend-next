import { createContext } from "react";
import { VehicleDataInterface } from "@/app/customer/interfaces/VehicleDataInterface";

export interface VehicleContextType {
  vehicleData: VehicleDataInterface;
  setVehicleInfo: (data: string) => void;
  getParkingStatus: (data: string) => Promise<boolean>;
}

export const VehicleContext = createContext<VehicleContextType | undefined>(
  undefined
);
