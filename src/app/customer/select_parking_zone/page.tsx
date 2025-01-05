"use client";

import React from "react";
import { useState, useEffect } from "react";
// import ConfirmReservationModel from "./confirmReservationModel";
import { useVehicleContext } from "@/app/customer/VehicleContext/UseVehicleContext";
import { fetchLotsByLotId } from "./fetchLotSections";
import { ParkingResult } from "./type";

import { fetchReservation } from "./fetchReservation";
import { useRouter } from "next/navigation";

export default function SelectParkingSlot() {
  const { vehicleData } = useVehicleContext();
  const router = useRouter();

  const [sections, setSections] = useState<ParkingResult[] | undefined>([]);
  const [selectedOption, setSelectedOption] = useState<ParkingResult>();
  const [error, setError] = useState<string | null>(null);

  const parking_lot_id = 2;

  useEffect(() => {
    const getParkingSpots = async (parking_lot_id: number) => {
      try {
        const data = await fetchLotsByLotId(parking_lot_id);
        console.log(data);
        if (data?.length === 0) {
          setError("No any area found to park");
        }
        setSections(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch parking spots");
      }
    };

    getParkingSpots(parking_lot_id);
  }, []);

  const handleSelectSection = (section: ParkingResult) => {
    setSelectedOption(section);
  };

  const handleConfirmSelection = async (option: ParkingResult) => {
    try {
      const data = await fetchReservation(vehicleData, option);
      if (data?.status === 200) {
        router.push("/customer/thankyou_page");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Some issue with fetching");
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 font-semibold text-center text-2xl">
          {" "}
          {error}{" "}
        </p>
      </div>
    );
  }

  if (!sections?.length) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Select Your Parking Slot
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6 p-4">
            {sections?.map((section, id) => (
              <button
                key={id}
                className="bg-blue-600 text-white rounded-lg p-4 shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
                onClick={() => handleSelectSection(section)}
              >
                <h2 className="text-lg font-semibold mb-2">{section.name}</h2>
                <p className="text-sm">
                  Vehicle allowed:{" "}
                  <span className="font-medium">
                    {section.vehicle_allow_type}
                  </span>
                </p>
                <p className="text-sm">
                  Spaces left:{" "}
                  <span className="font-medium">{section.total_spaces}</span>
                </p>
              </button>
            ))}
          </div>

          <div className="text-center">
            {selectedOption ? (
              <>
                <p className="text-xl text-green-500 mb-4">
                  You have selected Parking Slot{" "}
                  <span className="text-blue-500">
                    ({selectedOption.name} - {selectedOption.vehicle_allow_type}
                    )
                  </span>
                  .
                </p>
                <button
                  onClick={() => handleConfirmSelection(selectedOption)}
                  className="w-full py-3 text-lg font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Confirm Selection
                </button>
              </>
            ) : (
              <p className="text-gray-500">Please select a parking slot.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
