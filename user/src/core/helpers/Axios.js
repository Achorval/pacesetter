import axios from 'axios';
import store  from "../../redux/store";
export const baseURL = process.env.REACT_APP_API_URL;

const Axios = axios.create({
    baseURL: baseURL,
    headers: {
        common: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }
});

Axios.interceptors.request.use(
    config => {
      
        const { 
            token 
        } = store.getState().UserReducer;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    err => Promise.reject(err)
);

export default Axios;
