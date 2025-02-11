import { Currencies } from "@/modules/Payments/constants/types";
import request from "./request";
import { BASE_URL } from "@/constants/services";

const MOCKED_CURRENCIES: Currencies[] = [
    {
        currency: "USD",
        name: "Dolar",
        symbol: "$",
        image: require("@/assets/images/icon-usa.png"),
    },
    {
        currency: "EUR",
        name: "Euro",
        symbol: "€",
        image: require("@/assets/images/icon-euro.png"),
    },
    {
        currency: "GBP",
        name: "Libra",
        symbol: "£",
        image: require("@/assets/images/icon-pound.png"),
    },
]

const PaymentServices = {
    //mocked service to simulate a request
    getCurrencies: async (): Promise<{ data: Currencies[]; status: number }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: MOCKED_CURRENCIES,
                    status: 200
                });
            }, 2000);
        });
    },
}

export default PaymentServices
