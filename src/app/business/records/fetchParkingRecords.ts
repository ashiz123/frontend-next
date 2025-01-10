import axiosClient from "../components/axiosClient"


export const fetchParkingRecords = async(user_id : number) => {
  
const headers = {
    'Content-Type': 'application/json', 
    'Accept' : 'application/json'
  };
 
  try{
     const response = await axiosClient.get(`http://localhost:3000/api/v1/get_parking_records/${user_id}`,{headers});
     console.log(response);
     return response.data;
   
  }

  catch(error){
    console.log('error is', error);
    throw error;
  }
   
}