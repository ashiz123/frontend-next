"use client";
import React, {useEffect, useMemo, useState} from 'react'

import {useRouter} from 'next/navigation';
import moment from 'moment';

import { VehicleDataInterface } from '@/app/customer/interfaces/VehicleDataInterface';
import VehicleDetails from '@/app/customer/components/vehicleDetails';
import { useVehicleContext } from '@/app/customer/Vehicle/UseVehicleContext';
import { fetchCheckVehicleStatus } from './fetchVehicleStatus'; 
import ErrorMessage from '@/app/customer/components/error';

export default function ConfirmVehicle() {
    
    const router = useRouter();
    const {vehicleData, setVehicleData} = useVehicleContext();
    const [parking, setParking] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const formattedEntryTime = useMemo(() => moment().format('YYYY-MM-DD HH:mm:ss'), []);
  
   
    //use Memo for better performance
    const vehicle : VehicleDataInterface = useMemo(() => ({
      vehicle_reg : vehicleData.vehicle_reg,
      vehicle_make: vehicleData.vehicle_make,
      vehicle_year: vehicleData.vehicle_year,
      vehicle_color: vehicleData.vehicle_color,
      vehicle_type: vehicleData.vehicle_type,
      entry_time: formattedEntryTime
    }), [vehicleData,formattedEntryTime])

    useEffect(() => {
      const getVehicleStatus = async(vehicle: VehicleDataInterface) =>{
        setLoading(true);
      try{
        const data = await fetchCheckVehicleStatus(vehicle);
        const {vehicle_parking} = data;
        setParking(!!vehicle_parking);
        setVehicleData((prevData) => ({...prevData, entry_time : vehicle.entry_time}))
      }
      catch(error){
        console.log(error);
        setError('Failed to fetch parking spots');
      }
      finally{
        setLoading(false);
      }
    }

      getVehicleStatus(vehicle);
    }, [vehicle.vehicle_reg])

 
    console.log(loading);
  
    function handleConfirm(){
     const targetRoute = parking ? '/customer/parking_time' : '/customer/select_parking_slot';
     router.push(targetRoute);
    }

     

return (
   <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-3">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Confirm Vehicle Details</h1>
        <div className="mb-4">
          <VehicleDetails vehicleData={vehicle}/>
        </div>
        <div className="flex space-x-4">
          {error &&  <ErrorMessage  error = {error}/> }
         
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Confirm
          </button>


          <button
            onClick={() => router.push('/')}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
            Edit
          </button>
        </div>
      </div>
    </div>
   </>
  )
}
