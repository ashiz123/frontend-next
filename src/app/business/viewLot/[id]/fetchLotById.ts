import axiosClient from "../../components/axiosClient";


export const fetchLotById = async(lotId : number) => {
    try{
        const response = await axiosClient.get(`http://localhost:3000/api/v1/parking_lot/${lotId}`, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        console.log(response);
        return response.data;
    }
    
    catch(error){
        console.log(error);
    }
}