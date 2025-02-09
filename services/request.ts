import { Method, ResponseData } from '@/types/request';
import { AXIOS_REQUEST_METHOD, METHOD } from '@/constants/services';
import { AxiosError, AxiosRequestConfig } from 'axios';

const request = async <T = object>(url: string, options: AxiosRequestConfig & { method?: Method }): Promise<ResponseData<T>> => {
    try {
        const method: Method = options.method || METHOD.GET;

        const response = await AXIOS_REQUEST_METHOD[method](url,
            {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': '564ab831-18a6-4cb3-adfa-4f62d9e9e97a',
                    ...options.headers
                }
            }
        );

        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const axiosError = error as AxiosError;

        return {
            data: null,
            status: axiosError.response?.status || 500
        };
    }
}

export default request;
