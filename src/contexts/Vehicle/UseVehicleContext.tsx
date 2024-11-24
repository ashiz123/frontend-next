import { useContext } from "react";
import { VehicleContext, VehicleContextType } from "./VehicleContext";


export const useVehicleContext = (): VehicleContextType => {
  const context = useContext(VehicleContext);

  // Check if context is available
  if (!context) {
    throw new Error("useVehicleContext must be used within a VehicleProvider");
  }

  return context;
};