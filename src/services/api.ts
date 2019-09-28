import config from '@/config';
import axios from 'axios';

export async function login(data:object) {
  return axios.post(`${config.baseURL}api/user/login`, data);
}
