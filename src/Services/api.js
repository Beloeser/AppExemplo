import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://192.168.0.19:8000"; 
console.log("[api] baseURL =", baseURL);

const api = axios.create({ baseURL });

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("[api] interceptor, final config.headers:", config.headers);
    return config;
  },
  (error) => {
    console.error("[api] interceptor error:", error);
    return Promise.reject(error);
  }
);

export default api;
