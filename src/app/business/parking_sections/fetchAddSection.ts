import axiosClient from "../components/axiosClient";
import { sectionProps } from "./type";

export const fetchAddSection = async(data: sectionProps) => {

  
    const headers = {
        'Content-Type': 'application/json', // Ensure your backend expects JSON
        'Accept' : 'application/json'
      };


      try
      {
        const response = await axiosClient.post(
            'http://localhost:3000/api/v1/parking_section',
            data,
            { headers }
          );
      
       if(response.status === 200){
         return response.data;
       }
      
      }
      catch(error){
        console.log(error);
        throw error;
      }
   
}

 