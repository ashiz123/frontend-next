import React, {useState, useEffect, FormEvent} from 'react'
import { VehicleDataInterface } from '@/interfaces/VehicleDataInterface';
import { SpotDataInterface } from '@/interfaces/SpotDataInterface';
import axios from 'axios';
import {useRouter, useSearchParams} from 'next/navigation';


interface ConfirmReservationModelProps{
   vehicle : VehicleDataInterface,
   spot : SpotDataInterface,
   closeModal : () => void,
   openModal : boolean
}

const ConfirmReservationModel: React.FC<ConfirmReservationModelProps> = ({vehicle, spot, closeModal, openModal}) => {
  

const router = useRouter();
const [error, setError] = useState();


function onSubmit(e: React.MouseEvent<HTMLButtonElement>){
  console.log(vehicle);
  e.preventDefault();
   axios.post('http://localhost:3000/api/v1/entry_vehicle', {vehicleDetail: vehicle, spot: spot}, {
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      .then(response => {
        if(response.status === 200){
          localStorage.removeItem('vehicleData');
          router.push('/successParking');
        }
      })
      .catch(
        error => { 
          console.log(error.response.data.message)
          setError(error.response.data.message)
        })
 
}


function onCancel(){
  localStorage.removeItem('vehicleData');
  router.push('/');
}



  
  return (
<>
{openModal && 
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

              


          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
               {/* close button */}
              <div className="absolute top-0 right-0 p-4">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

               

              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h2 className="text-base font-semibold text-gray-900" id="modal-title">Zone Confirmation</h2>
                <div className="mt-2 text-gray-900">
                  Are you parking in <span className=' font-semibold'>{spot.vehicle_type}</span> zone?
                  <p className="text-sm text-gray-600 mt-5 text-blue-400">
                     Pricing is depend upon the parking zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" onClick = {(e) => onSubmit(e)} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
            <button type="button" onClick = {() => onCancel()} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            {error && 
                    <div className="text-red-500 text-sm font-medium mt-2 mr-2">
                      {error}
                    </div>
                  }
          </div>
        </div>
      </div>
    </div>
  </div>
}
    
  </>
  )
}


export default ConfirmReservationModel;
