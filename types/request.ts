import axios, { AxiosRequestConfig } from "axios";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type AxiosRequest = (url: string, config?: AxiosRequestConfig) => Promise<any>

interface ResponseData<T> {
    data: T | null;
    status: number;
}

export { ResponseData, Method, AxiosRequest };
