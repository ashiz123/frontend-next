import axiosClient from "../components/axiosClient"




export const fetchParkingRecords = async(type: string, id : number) => {
  
const headers = {
    'Content-Type': 'application/json', 
    'Accept' : 'application/json'
  };
 
  try{
    let response;

    if(type=== 'user'){
       response = await axiosClient.get(`http://localhost:3000/api/v1/get_parking_records_byUser/${id}`,{headers});
    }else{
       response = await axiosClient.get(`http://localhost:3000/api/v1/get_parking_records_byLot/${id}`,{headers});
    }
     
     console.log(response);
     return response.data;
   
  }

  catch(error){
    console.log('error is', error);
    throw error;
  }
   
}