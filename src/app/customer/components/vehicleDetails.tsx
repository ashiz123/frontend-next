import { VehicleDataInterface } from '@/app/customer/interfaces/VehicleDataInterface'
import React from 'react'

const VehicleDetails: React.FC<{vehicleData : VehicleDataInterface}> = ({vehicleData}) => {
  return (
    <div>
        <p className="font-medium text-gray-700">Reg no: <span className="font-normal"> {vehicleData.vehicle_reg} </span></p>
          <p className="font-medium text-gray-700">Make: <span className="font-normal"> {vehicleData.vehicle_make} </span></p>
          <p className="font-medium text-gray-700">Type: <span className="font-normal"> {vehicleData.vehicle_type} </span></p>
          <p className="font-medium text-gray-700">Color: <span className="font-normal"> {vehicleData.vehicle_color} </span></p>
          <p className="font-medium text-gray-700">Year: <span className="font-normal"> {vehicleData.vehicle_year} </span></p>
    </div>
  )
}

export default VehicleDetails;
