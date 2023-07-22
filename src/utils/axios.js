import axios from "axios";
export const baseurl = "http://localhost:7000"
const axiosInstance = axios.create({
    baseURL: baseurl,
});

export default axiosInstance;