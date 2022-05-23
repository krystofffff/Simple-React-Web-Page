import axios from "axios";
import {useGetTokenFromLS} from "../hooks/useGetTokenFromLS";

const SecuredAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

SecuredAxios.interceptors.request.use(config => {
    config.headers["Authorization"] = `Bearer ${useGetTokenFromLS()}`
    return config;
})

export default SecuredAxios