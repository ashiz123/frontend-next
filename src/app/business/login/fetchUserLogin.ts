
import { FormData } from "./type";
import axiosClient from "../create_parking_lot/axiosClient"; //withCredantials



export const fetchUserLogin = async(formData : FormData ) => {

    const {email, password} = formData;

    try{
        const response = await axiosClient.post('http://localhost:3000/api/auth/login', {email, password}, {
            headers : {
                'Content-Type' : 'Application/json',
                'Accept' : 'Application/json'
            }
        });
        if(response.status === 200){
            console.log(response.data);
            return response;
        }
    }
    catch(error)
    {
        console.log('Error fetching', error);
    }

}