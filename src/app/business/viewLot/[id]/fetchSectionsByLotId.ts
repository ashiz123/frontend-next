import axiosClient from "../../components/axiosClient"

export const fetchSectionsByLotId = async(lotId: number) => {
    const response = await axiosClient.get(`http://localhost:3000/api/v1/parking_sections_by_lotId/${lotId}`, {
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    });
    console.log(response);
    return response.data;

}