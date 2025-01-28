import axios from "axios"

type fetchLotLoginType = {
    lot_name : string;
    lot_pin : string;
}


 const fetchLotLogin = async({lot_name, lot_pin} : fetchLotLoginType) => {

    try{
        const response = await axios.post('http://localhost:3000/api/v1/lot/login' , {lot_name, lot_pin}, { headers : {
            'Content-Type' : 'Application/json',
            'Accept' : 'Application/json'
         }});
    
         console.log(response);
         if(response.status === 200){
           return response.data;
         }
    }
    catch(error){
        console.log('fetching error', error);

    }

    
}

export default fetchLotLogin;