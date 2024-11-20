'use client';

import React from 'react';
import { useState, useEffect } from 'react';

import Layout from '@/components/layout'
import axios from 'axios';
import ConfirmReservationModel from '@/components/confirmReservationModel';
import { VehicleDataInterface } from '@/interfaces/VehicleDataInterface';
import { SpotDataInterface } from '@/interfaces/SpotDataInterface';

  

export default function SelectParkingSlot() {
  const [spots, setSpots] = useState<SpotDataInterface[]>([]);
  const [vehicleDetail, setVehicleDetail] = useState<VehicleDataInterface>();
  const [selectedSlot, setSelectedSlot] = useState<SpotDataInterface>();
  const [selectedSpotDetail, setSelectedSpotDetail] = useState<SpotDataInterface | undefined>();
  const [error , setError] = useState();
  const [openModal , setOpenModal] = useState(false);


  useEffect(() => {
    const fetchSpots = () => {
      axios.get('http://localhost:3000/api/v1/parking_spots_by_lotId/3', {
        headers : {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        }
      })
      .then(
        (response => {
          if(response.status === 200){
            console.log(response);
            setSpots(response.data);
          }
        })
      )
  
      .catch(error => {
        console.log(error);
        setError(error);
      })
    }
     fetchSpots();
  },[] )



  useEffect(() => {
    const vehicleData = localStorage.getItem("vehicleData");
    if(vehicleData){
      console.log(JSON.parse(vehicleData));
      setVehicleDetail(JSON.parse(vehicleData));
    }
  }, [])



  const handleSelectSlot = (spot : SpotDataInterface ) => {
    setSelectedSlot(spot);
  };

  

  const handleConfirmSelection = (spotId : number) => {
    axios.get(`http://localhost:3000/api/v1/parking_spot_by_id/${spotId}` , {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    .then(response => {
      console.log('confirmSelection', response.data[0])
      setSelectedSpotDetail(response.data[0]);
      setOpenModal(true);
    })
    .catch(error => console.log(error)) 
   };
   
   const handleCloseModal = () => {
    console.log('close modal');
    setOpenModal(false);
   }
 

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Select Your Parking Slot
        </h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {spots.map((spot, id) => (
            <button key = {id} className='bg-blue-600 text-white rounded-lg p-1.5' onClick={() =>handleSelectSlot(spot)}>
                {spot.id} - {spot.vehicle_type}
                <p>Spaces left: {spot.total_spaces}</p>
            </button>
            
          ))}
        </div>

        <div className="text-center">
          {selectedSlot ? (
            <>
              <p className="text-xl text-green-500 mb-4">
                You have selected Parking Slot <span className='text-blue-500'>({selectedSlot.id} - {selectedSlot.vehicle_type})</span>.
              </p>
              <button
                onClick={() => handleConfirmSelection(selectedSlot.id)}
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

    {
      selectedSpotDetail && vehicleDetail &&
      <div className='text-center'>
      <ConfirmReservationModel vehicle = {vehicleDetail} spot = {selectedSpotDetail} closeModal = {handleCloseModal} openModal= {openModal}/>
     </div>
    }
    
    </Layout>
  );
}
