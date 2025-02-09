import request from "./request";
import { BASE_URL } from "@/constants/services";

const PaymentServices = {
    getCurrencies: async () => request(`${BASE_URL}/currencies`, { method: "GET" }),
}

export default PaymentServices
