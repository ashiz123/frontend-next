"use client";
import { useState } from "react";
import { VehicleContext } from "./VehicleContext";
import { VehicleDataInterface } from "@/interfaces/VehicleDataInterface";
// import { VehicleApiInterface } from "@/interfaces/VehicleApiInterface";



export function VehicleProvider({children} : {children: React.ReactNode}){
    const [vehicleData, setVehicleData] = useState<VehicleDataInterface>({
      vehicle_color : "",
      vehicle_reg : "",
      vehicle_type : "",
      vehicle_make : "",
      vehicle_year : "",
      entry_time: ""
  });
  
  
  return(
      <VehicleContext.Provider value = {{vehicleData, setVehicleData}}>
          {children}
      </VehicleContext.Provider>
  )
  
  
  
  }