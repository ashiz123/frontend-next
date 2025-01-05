// import axios from "axios"
import { ParkingLotFormData } from "./type";
import axiosClient from "../components/axiosClient";


export const addParkingLot = async(user_id : number, parkingLot: ParkingLotFormData) => {
    const{name, postcode, state, city,  latitude, longitude, total_spots, security_features, surface_types, max_height, grouped , vehicle_allow_type } = parkingLot;
    const data = {
      user_id,
      name,
      postcode,
      state,
      city,
      latitude,
      longitude,
      total_spots,
      security_features,
      surface_types,
      max_height,
      grouped,
      vehicle_allow_type
    }

    const headers = {
      'Content-Type': 'application/json', // Ensure your backend expects JSON
      'Accept' : 'application/json'
    };
  

    try{
        const response = await axiosClient.post(
            'http://localhost:3000/api/v1/parking_lots',data,
            {
              headers,
            }
          );


        if(response.status === 200){
            console.log(response);
            return response;
        }
    }
    catch(error){
        console.log('fetching error', error);
    }
   } 