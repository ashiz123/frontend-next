import axios from "axios"




export const getLotByAuthLotId = async() => {


    const token = localStorage.getItem('lot_auth');
    console.log(token);

    try{
        const response = await axios.get('http://localhost:3000/api/v1/lot/getLot', {headers : {
            'Accept' : 'Application/json',
            'Content-Type' : 'Application/json',
            'Authorization' : `Bearer ${token}`
        }});
        if(response){
            console.log(response.data);
            return response.data;
        }
        
    }
    catch(error){
        console.log(error);
     
    }


}