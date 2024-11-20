"use client";
import React, {useMemo} from 'react'
import Layout from '@/components/layout'
import {useRouter, useSearchParams} from 'next/navigation';
import moment from 'moment';

import { VehicleDataInterface } from '@/interfaces/VehicleDataInterface';
import VehicleDetails from '@/components/vehicleDetails';

export default function confirmVehicle() {
    
    const router = useRouter();
    const searchParams = useSearchParams();

    const formattedDate = useMemo(() => moment().format('YYYY-MM-DD HH:mm:ss'), []);
   
    const vehicleData : VehicleDataInterface = useMemo(() => ({
      vehicle_reg : searchParams.get('reg'),
      vehicle_make : searchParams.get('make'),
      vehicle_year : searchParams.get('year'),
      vehicle_type : searchParams.get('type'),
      vehicle_color : searchParams.get('color'),
      entry_time : formattedDate,
    }), [searchParams, formattedDate])



 


    function handleConfirm(){
      localStorage.setItem('vehicleData', JSON.stringify(vehicleData))
       
      router.push('/selectParkingSlot');
     
    }

return (
   <Layout>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-3">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Confirm Vehicle Details</h1>
        <div className="mb-4">
          <VehicleDetails vehicleData={vehicleData}/>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Confirm
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
   </Layout>
  )
}
