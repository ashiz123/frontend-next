import axios from "axios";


export const fetchExitVehicleFromParking = async(vehicleReg : string | null) => {
    try{
        const response = await axios.put(`http://localhost:3000/api/v1/exit_vehicle/${vehicleReg}`);
        console.log('Vehicle exited successfully:', response.data);
    }
    catch(error){
        console.error('Error exiting vehicle', error);
    }

}
