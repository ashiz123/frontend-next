"use client";
import React from "react";
import { useVehicleContext } from "@/app/customer/VehicleContext/UseVehicleContext";

export default function ThankyouPage() {
  const { vehicleData } = useVehicleContext();

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-blue-500 p-8 text-white">
          Thankyou. {vehicleData.vehicle_reg} have parked successfully @{" "}
          {vehicleData.entry_time}.
        </div>
      </div>
    </>
  );
}
