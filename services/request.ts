import { RequestParams, ResponseData } from '@/types/request';
import { AXIOS_REQUEST_METHOD, METHOD } from '@/constants/services';
import { AxiosError, AxiosRequestConfig } from 'axios';

const request = async <T = object>(
    url: string,
    params: RequestParams = {},
): Promise<ResponseData<T>> => {
    try {
        const method = params.method || METHOD.GET;
        const body = params.body || null;

        const response = await AXIOS_REQUEST_METHOD[method](url, body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Device-Id': '564ab831-18a6-4cb3-adfa-4f62d9e9e97a',
                }
            }
        );

        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error(axiosError);

        return {
            data: null,
            status: axiosError.response?.status || 500
        };
    }
}

export default request;
