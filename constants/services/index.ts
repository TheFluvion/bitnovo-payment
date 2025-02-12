import { AxiosRequest, Method } from "@/types/request";
import axios from "axios";

const BASE_URL = 'https://payments.pre-bnvo.com/api/v1';
const WHATSAPP_BASE_URL = 'whatsapp://send?phone=';

const HTTP_STATUS: Record<string, number> = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE: 422,
    INTERNAL_SERVER_ERROR: 500,
    METHOD_NOT_ALLOWED: 405,
    SERVICE_UNAVAILABLE: 503,
}

const METHOD: Record<Method, Method> = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const AXIOS_REQUEST_METHOD: Record<Method, AxiosRequest> = {
    GET: axios.get,
    POST: axios.post,
    PUT: axios.put,
    DELETE: axios.delete
}

export { BASE_URL, WHATSAPP_BASE_URL, HTTP_STATUS, METHOD, AXIOS_REQUEST_METHOD }
