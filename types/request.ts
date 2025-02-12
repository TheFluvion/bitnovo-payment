import axios, { AxiosRequestConfig } from "axios";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type AxiosRequest = (url: string, data?: any, config?: AxiosRequestConfig) => Promise<any>

interface RequestParams {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: { [key: string]: string };
    body?: string;
    mode?: 'cors' | 'no-cors' | 'same-origin';
}
interface ResponseData<T> {
    data: T | null;
    status: number;
}

export { ResponseData, Method, AxiosRequest, RequestParams };
