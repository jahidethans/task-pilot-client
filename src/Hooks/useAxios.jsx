import axios from "axios";


const useAxios = () => {
    const instance = axios.create({
        baseURL: 'https://task-pilot-server-omega.vercel.app',
      });
    return instance
};

export default useAxios;