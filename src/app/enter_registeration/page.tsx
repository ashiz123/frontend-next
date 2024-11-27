"use client";
import Layout from '@/components/layout'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useVehicleContext } from '@/contexts/Vehicle/UseVehicleContext';
import { mapApiToVehicleData } from '@/interfaces/VehicleDataInterface';

export default function Enter_registeration() {

  

    // const [vehicle, setVehicle] = useState<VehicleDataInterface>({
    //     'vehicle_make' : '',
    //     'vehicle_color' : '',
    //     'vehicle_reg' : '',
    //     'vehicle_type' : '',
    //     'vehicle_year' : '', 
    //     'entry_time': ''
    // });
    const [registrationNumber , setRegistrationNumber] = useState<string>('');
    const {setVehicleData} = useVehicleContext();
    // const [error, setError] = useState(null);
    const router = useRouter();

  const handleSubmit = async(event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try{
      const response = await axios.post('http://localhost:3000/api/v1/get_vehicle_reg', {registrationNumber} )
      console.log(response.data);
      const data = mapApiToVehicleData(response.data);
      setVehicleData(data);
      // router.push(`/confirmVehicle?color=${data.colour}&make=${data.make}&year=${data.yearOfManufacture}&type=${data.typeApproval}&reg=${registrationNumber}`);
      router.push('/confirm_vehicle')
    


    }
    catch(error)
    {
       console.error('Error posting data', error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistrationNumber(event.target.value);
  };



  return (
    <Layout>
    <div className="flex justify-center items-center h-screen  bg-gray-100 ">
<div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
<div className="text-center mb-4">
  <h3 className="text-lg font-bold text-gray-800">Enter the Registration Number</h3>
  <p className="text-sm text-gray-600">Please enter your registration number to proceed.</p>
</div>
<form onSubmit={handleSubmit}>
  <label htmlFor="default-search" className="sr-only">Search</label>
  <div className="relative mb-4">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      name = "registration_number"
      value = {registrationNumber}
      onChange = {handleChange}
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for your number..."
      required
    />
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-white transition duration-300"
  >
    Search
  </button>
</form>
</div>
</div>
</Layout>
  )
}
