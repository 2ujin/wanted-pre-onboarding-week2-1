import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  (config) => config,
  () => ({ message: '런타임 에러가 발생했습니다.' })
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

const carAPI = {
  async getCars(queryParams = {}) {
    axiosInstance.defaults.params = queryParams;
    const res = await axiosInstance.get('');
    return res;
  },

  async getCarsDetail(params: { segment: string, fuelType: string }) {
    const res = await axiosInstance.get('', { params });
    return res;
  },

};

export default carAPI;
