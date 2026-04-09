import axios from 'axios';

const baseURL = 'https://workintech-fe-ecommerce.onrender.com';

export const API = axios.create({
  baseURL,
});

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL,
    headers: {
      Authorization: token, 
    },
  });
};