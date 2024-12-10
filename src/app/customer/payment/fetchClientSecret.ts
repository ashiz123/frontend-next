import axios from "axios";


export const fetchClientSecret = async(charged_amount : number, ) => {

    const clientSecretUrl = '/api/v1/create_payment_intent';
    try{
        const response = await axios.post(clientSecretUrl,{charged_amount},{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }

}


