import axios from "axios";

export const fetchSpots = async() => {
    try{
        // await new Promise((resolve) => setTimeout(resolve, 20000));
        const response = await axios.get('http://localhost:3000/api/v1/parking_spots_by_lotId/1', {
            headers : {
              "Content-Type" : "application/json",
              "Accept" : "application/json"
            }
          });

          if(response.status === 200){
            console.log(response.data);
            return response.data;
          }
    }

    catch(error){
        console.error('Error fetching data', error);
        throw error;
    }
   

   
  }