import axiosClient from "@/app/business/components/axiosClient";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const token = localStorage.getItem('lot_auth');

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization" :  `Bearer ${token}`
  },
};


//geting lots of authenticated user.
// export const getLotId = async() => {
//     try{
//         const response = await axiosClient.get(`${apiBaseUrl}/parking_lots_by_auth_user`, axiosConfig);
//         if(response.data.length > 0){
//           console.log(response.data.length);
//         } 
//         return response;
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
// }






export const getLot = async() => {
    try{
        const response = await axiosClient.get(`${apiBaseUrl}/lot/getLot`, axiosConfig);
        if(response.data.length > 0){
         return response.data[0];
        } 
       
    }
    catch(error){
        console.log(error);
        throw error;
    }


}