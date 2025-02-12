import { Currencies } from "@/modules/Payments/constants/types";
import request from "./request";
import { BASE_URL } from "@/constants/services";
import { OptionItemType } from "@/components/OptionItemList/OptionItemList";
import { create } from "react-test-renderer";

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

const COUNTRIES: OptionItemType[] = [
    { symbol: "+54", name: "Argentina", image: require("@assets/images/icon-argentina.png"), id: "+54" },
    { symbol: "+34", name: "España", image: require("@assets/images/icon-spain.png"), id: "+34" },
    { symbol: "+240", name: "Equatorial Guinea", image: require("@assets/images/icon-guinea.png"), id: "+240" },
    { symbol: "+30", name: "Grecia", image: require("@assets/images/icon-grecia.png"), id: "+30" },
    { symbol: "+500", name: "South Georgia and the South Sandwich Islands", image: require("@assets/images/icon-uk.png"), id: "+500" },
    { symbol: "+502", name: "Guatemala", image: require("@assets/images/icon-guatemala.png"), id: "+502" },
    { symbol: "+592", name: "Guyana", image: require("@assets/images/icon-guyana.png"), id: "+592" },
    { symbol: "+852", name: "Hong Kong", image: require("@assets/images/icon-kong.png"), id: "+852" },
    { symbol: "+504", name: "Honduras", image: require("@assets/images/icon-honduras.png"), id: "+504" },
];

interface CreateOrderParams {
    expected_output_amount: number;
    fiat: string;
}

interface CreateOrderResponse {
    identifier: string;
    reference: string;
    payment_uri: string;
    web_url: string;
    address: string;
    tag_memo: string;
    input_currency: string;
    expected_input_amount: number;
    rate: number;
    notes: string;
    fiat: string;
    language: string;
}

const PaymentServices = {
    //mocked service to simulate a request
    getCurrencies: async (): Promise<{ data: Currencies[]; status: number }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: MOCKED_CURRENCIES,
                    status: 200
                });
            }, 1000);
        });
    },
    //mocked service to simulate a request
    getCountries: async (): Promise<{ data: OptionItemType[]; status: number }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: COUNTRIES,
                    status: 200
                });
            }, 1000);
        });
    },
    createOrder: async (params: CreateOrderParams) => request<CreateOrderResponse>(
        `${BASE_URL}/orders/`,
        {
            method: "POST",
            body: JSON.stringify(params),
        }
    )
}

export default PaymentServices
