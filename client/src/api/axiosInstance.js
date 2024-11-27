import axios from "axios";

const axiosInstance = axios.create({
    baseURL : 'https://13.60.226.150',
});

axiosInstance.interceptors.request.use((config)=>{
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
},(err)=> Promise.reject(err)
);

export default axiosInstance;