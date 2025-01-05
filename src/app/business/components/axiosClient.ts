import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000', // Your backend URL
    withCredentials: true, // Send cookies with every request
});

export default axiosClient;