import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://backend-haek.onrender.com/api',
  withCredentials: true,
});
