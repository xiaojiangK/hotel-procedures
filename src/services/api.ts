import config from '@/config';
import axios from 'axios';

export async function login(data:object) {
  return axios.post(`${config.baseURL}api/login`, data);
}

export async function register(data:object) {
  return axios.post(`${config.baseURL}api/register`, data);
}

export async function retrieve(data:object) {
  return axios.post(`${config.baseURL}api/retrieve`, data);
}

export async function getCode(phone:string) {
  return axios.post(`${config.baseURL}api/code`, { phone });
}

export async function changeInfo(name:string) {
  return axios.post(`${config.baseURL}api/info`, { name });
}

export async function cancelOrder(flag:string, id:string) {
  return axios.post(`${config.baseURL}api/CancelOrder`, { flag, order_id: id });
}

export async function getOrderDetail(flag:string, id:string) {
  return axios.get(`${config.baseURL}api/OrderDetail?order_id=${id}&flag=${flag}`)
}

export async function uploadFile(upfile:any) {
  return axios.get(`${config.baseURL}api/uploadFile?upfile=${upfile}`)
}

export async function saveAssess(data:any) {
  return axios.post(`${config.baseURL}api/SaveAssess`, data)
}

export async function assessList(page?:number, type?:number, id?:any) {
  return axios.get(`${config.baseURL}api/AssessList?page=${page}&img_type=${type}&order_id=${id}`)
}

export async function assessCount(id:any) {
  return axios.get(`${config.baseURL}api/AssessList?user_id=${id}`)
}

// 业绩数据
export async function performance(id:any) {
  return axios.get(`${config.baseURL}api/Performance?id=${id}`)
}

// 邀请成员
export async function inviteMember(id:any) {
  return axios.get(`${config.baseURL}api/InviteMember?id=${id}`)
}

// 费用明细
export async function getRoomCost(roomId:any, userId:any, start:string, end:string) {
  return axios.get(`${config.baseURL}api/GetRoomCost?room_id=${roomId}&user_id=${userId}&start=${start}&end=${end}`)
}

// 酒店超市订单
export async function getMarketOrder(id:any, flag:any) {
  return axios.get(`${config.baseURL}api/MarketOrder?order_id=${id}&flag=${flag}`)
}

// 订单状态
export async function orderStatus(id:any) {
  return axios.get(`${config.baseURL}api/OrderStatus?id=${id}`)
}

// 酒店设施
export async function volume() {
  return axios.get(`${config.baseURL}api/Volume`)
}

// 酒店超市
export async function goods() {
  return axios.get(`${config.baseURL}api/Goods`)
}

// 酒店周边
export async function periphery() {
  return axios.get(`${config.baseURL}api/Periphery`)
}

// 酒店详情
export async function hotelDetail() {
  return axios.get(`${config.baseURL}api/hotelDetail`)
}

// 早餐券
export async function breakfast(id:any) {
  return axios.get(`${config.baseURL}api/Service?seller_id=${id}`)
}
