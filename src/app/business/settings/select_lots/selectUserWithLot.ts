import {AxiosRequestConfig } from "axios";
import axiosClient from "../../components/axiosClient";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;




export const selectUserWithLot = async(lotId : number) => {

    console.log('fetch', lotId);

    const requestBody  = {
        'lotId' : lotId
    }

    const config: AxiosRequestConfig  =  {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }, 
    
    } 

    const response = await axiosClient.post(`${apiBaseUrl}/parking_lots/activate_lot`,requestBody, config );
    console.log(response);
    return response.data;

}

