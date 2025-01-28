"use client";
import { useState } from "react";
import { VehicleContext } from "./VehicleContext";
import {
  mapApiToVehicleData,
  VehicleDataInterface,
} from "@/app/customer/interfaces/VehicleDataInterface";
import { fetchVehicleFromDvla } from "../enter_registeration/fetchVehicleFromDVLA";
import { fetchCheckVehicleStatus } from "../confirm_vehicle/fetchVehicleStatus";
// import { VehicleApiInterface } from "@/interfaces/VehicleApiInterface";

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [vehicleData, setVehicleData] = useState<VehicleDataInterface>({
    vehicle_color: "",
    vehicle_reg: "",
    vehicle_type: "",
    vehicle_make: "",
    vehicle_year: "",
  });

  const setVehicleInfo = async (registration_number: string) => {
    console.log("it works");
    const dvlaApi = await fetchVehicleFromDvla(registration_number);
    const data = mapApiToVehicleData(dvlaApi);
    localStorage.setItem("vehicle_reg", registration_number);
    setVehicleData(data);
  };

  const getParkingStatus = async (registrationNumber: string) => {
    try {
      const vehicleData = await fetchCheckVehicleStatus(registrationNumber);
      console.log(vehicleData);
      if (vehicleData.vehicle_parking === true) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <VehicleContext.Provider
      value={{ vehicleData, setVehicleInfo, getParkingStatus }}
    >
      {children}
    </VehicleContext.Provider>
  );
}
