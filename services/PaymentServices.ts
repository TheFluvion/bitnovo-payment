import { Currencies } from "@/modules/Payments/constants/types";
import request from "./request";
import { BASE_URL } from "@/constants/services";

const PaymentServices = {
    getCurrencies: async () => request<Currencies[]>(`${BASE_URL}/currencies`, { method: "GET" }),
}

export default PaymentServices
