import axios from "axios"
import { FormData } from "./types";

export const fetchUserRegister = async(formData : FormData) => {
const {firstname, lastname, email, password,} = formData;
    try{
        const response = await axios.post('http://localhost:3000/api/auth/register',{firstname, lastname, email, password }, {
            headers : {
                "Content-Type" : "application/json",
                 "Accept" : "application/json"
            }
        });
    
        if(response.status === 200){
            console.log(response.data);
            return response.data;
            }

        throw new Error('Posting data unsuccessful');
    }
    catch(error){
        console.log('error', error);
        throw error;
    }
   
}