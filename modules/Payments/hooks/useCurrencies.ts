import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Currencies } from "../constants/types";
import request from "@/services/request";

interface Props {
    handleSelectCurrency: (currency: Currencies) => void;
}

const useCurrencies = ({
    handleSelectCurrency
}: Props) => {
    const [currencies, setCurrencies] = useState<Currencies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleGetCurrencies = async () => {
        const { data } = await request<Currencies[]>("https://payments.pre-bnvo.com/api/v1/currencies", {
            method: "GET"
        })

        if (!!data?.length) {
            setCurrencies(data || [])
            handleSelectCurrency(data[1])
        } else {
            Alert.alert("Error", "Something went wrong")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        handleGetCurrencies()
    }, [])

    return {
        currencies,
        isLoading,
    };
}

export default useCurrencies
