"use client";

import React from "react";
import { useState, useEffect } from "react";
// import ConfirmReservationModel from "./confirmReservationModel";
import { useVehicleContext } from "@/app/customer/VehicleContext/UseVehicleContext";
import { fetchSections } from "./fetchLotSections";
import { ParkingResult } from "./type";

import { fetchReservation } from "./fetchReservation";
import { useRouter } from "next/navigation";
import withLotAuth from "@/app/parkingLots/hoc/withLotAuth";
import { ParkingLot } from "@/app/types/parkingLot";

const SelectParkingSlot = ({ lot }: { lot: ParkingLot }) => {
  const { vehicleData, setVehicleInfo } = useVehicleContext();
  const router = useRouter();

  const [sections, setSections] = useState<ParkingResult[] | undefined>([]);
  const [selectedOption, setSelectedOption] = useState<ParkingResult>();
  const [error, setError] = useState<string | null>(null);

  const registration_number = localStorage.getItem("vehicle_reg");

  console.log(lot?.grouped);

  useEffect(() => {
    const getVehicleData = async () => {
      if (!registration_number) {
        setError("No registration number found in localStorage");
        return;
      }

      try {
        setVehicleInfo(registration_number);
      } catch (error) {
        console.error("Failed to fetch vehicle data:", error);
        setError("Failed to fetch vehicle data");
      }
    };

    if (registration_number) {
      getVehicleData();
    }
  }, [registration_number]);

  useEffect(() => {
    const fetchLotSections = async () => {
      try {
        if (lot) {
          const data = await fetchSections(lot.id);
          console.log(data);
          if (!data || data.length === 0) {
            setError("No sections created"); //automatically add vehicle to add
          } else {
            setSections(data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch parking data");
      }
    };

    fetchLotSections();
  }, [lot?.id]);

  const handleSelectSection = (section: ParkingResult) => {
    console.log(section.id);
    setSelectedOption(section);
  };

  console.log(selectedOption);

  const handleConfirmSelection = async () => {
    try {
      if (selectedOption) {
        const data = await fetchReservation(
          vehicleData,
          lot.id,
          selectedOption.id
        );
        console.log(data);
        if (data) {
          router.push("/customer/thankyou_page");
        }
      }
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
                <h2 className="text-lg font-semibold mb-2">
                  {section.section_name}
                </h2>
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
                    ({selectedOption.section_name} -{" "}
                    {selectedOption.vehicle_allow_type})
                  </span>
                  .
                </p>
                <button
                  onClick={() => handleConfirmSelection()}
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
};

export default withLotAuth(SelectParkingSlot);
