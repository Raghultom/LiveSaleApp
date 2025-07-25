import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://ttdc.skeintech.com',
});

export const login = async (credentials) => {
  const res = await apiClient.post('/medscheme/tickets/login', credentials);
  return res.data;
};