import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { APIResponse } from './types';
const baseURL = 'localhost:8002/';

const freeWheelinAxios: AxiosInstance = axios.create({
	baseURL
}); 

const request = async<T>(config:AxiosRequestConfig): Promise<APIResponse<T>> => {
	try {
		const {data} = await freeWheelinAxios.request(config);
		return [undefined, data];
	} catch(error){
		return [error, undefined]; 
	}
}


const GET = <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<APIResponse<T>> => 
	request({...config, method: 'GET', url, params});


export const http = { GET } ; 