import config from '@/config';
import axios from 'axios';

export async function login(data:object) {
  return axios.post(`${config.baseURL}api/user/login`, data);
}

export async function register(data:object) {
  return axios.post(`${config.baseURL}api/user/register`, data);
}

export async function retrieve(data:object) {
  return axios.post(`${config.baseURL}api/user/retrieve`, data);
}

export async function getCode(phone:string) {
  return axios.post(`${config.baseURL}api/user/code`, { phone });
}

export async function changeInfo(name:string) {
  return axios.post(`${config.baseURL}api/change/info`, { name });
}

export async function cancelOrder(flag:string, id:string) {
  return axios.post(`${config.baseURL}api/CancelOrder`, { flag, order_id: id });
}
