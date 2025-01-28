"use client";

import React, { useEffect, useMemo, useState } from "react";
import { fetchParkingTime } from "./fetchParkingTime";
import TimeDisplay from "./TimeDisplay";
import { useVehicleContext } from "@/app/customer/VehicleContext/UseVehicleContext";
import { parkingSpentTime } from "./parkingSpentTime";
import AmountDisplay from "./AmountDisplay";
import Payment from "../payment/page";

export default function ParkingTime() {
  const [timeDifference, setTimeDifference] = useState<number>(0);

  const { vehicleData } = useVehicleContext();

  useEffect(() => {
    const getParkingInTime = async () => {
      try {
        const data = await fetchParkingTime(vehicleData.vehicle_reg);
        const { vehicle } = data;

        if (vehicle && vehicle[0].entry_time) {
          const timeSpent = parkingSpentTime(vehicle[0].entry_time);
          setTimeDifference(timeSpent.diffInMinutes);
        } else {
          throw new Error("Invalid vehilce data or missing entry time");
        }
      } catch (error) {
        console.log("Parking time error:", error);
        throw error;
      }
    };

    getParkingInTime();
  }, [vehicleData.vehicle_reg]);

  const parkingAmount = useMemo(() => {
    const ratePerHour = 0.5 / 60;
    const amount = timeDifference * ratePerHour;
    return amount;
  }, [timeDifference]);

  //  function  goToPayment()
  //  {
  //       router.push('/payment')
  //  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Time Spent</h1>

          {timeDifference != null && (
            <>
              <TimeDisplay totalMinutes={timeDifference} />
              <AmountDisplay parkingAmount={parkingAmount} />
            </>
          )}

          {/* You have spent <span className="font-semibold text-blue-600">{20}m {30}s</span> */}

          <div className="border-t-2 border-gray-200 my-6 pt-6">
            <p className="text-lg text-gray-700 font-medium mb-4">
              Do you want to exit?
            </p>
            {/* <button onClick = {() =>goToPayment()} className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Pay for parking
      </button> */}

            {parkingAmount && <Payment parkingAmount={parkingAmount} />}
          </div>
        </div>
      </div>
    </>
  );
}
