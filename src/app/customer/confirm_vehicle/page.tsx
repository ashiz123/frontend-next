"use client";
import React, { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import moment from "moment";
import { VehicleDataInterface } from "@/app/customer/interfaces/VehicleDataInterface";
import VehicleDetails from "@/app/customer/components/vehicleDetails";
import { useVehicleContext } from "@/app/customer/VehicleContext/UseVehicleContext";
import ErrorMessage from "@/app/customer/components/error";
import withLotAuth from "@/app/parkingLots/hoc/withLotAuth";
import { fetchReservation } from "../select_parking_zone/fetchReservation";
import { lotsContextType } from "@/app/business/contexts/parkingLots/lotsContext";
import { ParkingLot } from "@/app/types/parkingLot";

const ConfirmVehicle = ({ lot }: { lot: any }) => {
  const router = useRouter();
  const { vehicleData, setVehicleInfo, getParkingStatus } = useVehicleContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const registrationNumber = localStorage.getItem("vehicle_reg");

  //use Memo for better performance
  const vehicle: VehicleDataInterface = useMemo(
    () => ({
      vehicle_reg: vehicleData.vehicle_reg,
      vehicle_make: vehicleData.vehicle_make,
      vehicle_year: vehicleData.vehicle_year,
      vehicle_color: vehicleData.vehicle_color,
      vehicle_type: vehicleData.vehicle_type,
    }),
    [vehicleData]
  );

  useEffect(() => {
    if (registrationNumber) {
      setVehicleInfo(registrationNumber);
    }
  }, [registrationNumber]);

  const handleConfirm = async () => {
    try {
      if (registrationNumber) {
        if (await getParkingStatus(registrationNumber)) {
          router.push("/customer/parking_time");
        } else {
          //checking if lot sectioned or not. if sectioned go to select the section otherwise vehicle parked in lot.
          if (lot.grouped === 1) {
            router.push("/customer/select_parking_zone");
            return;
          }
          const reservation = await fetchReservation(vehicle, lot.id);
          if (reservation) {
            console.log("Vehicle parked successfully");
            router.push("/customer/thankyou_page");
          }
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-3">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4">
            Confirm Vehicle Details
          </h1>
          <div className="mb-4">
            <VehicleDetails vehicleData={vehicle} />
          </div>
          <div className="flex space-x-4">
            {error && <ErrorMessage error={error} />}

            <button
              onClick={handleConfirm}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Confirm
            </button>

            <button
              onClick={() => router.push("/")}
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withLotAuth(ConfirmVehicle);
