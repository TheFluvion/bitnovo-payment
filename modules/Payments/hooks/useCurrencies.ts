import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Currencies } from "../constants/types";
import request from "@/services/request";
import PaymentServices from "@/services/PaymentServices";

interface Props {
    handleSelectCurrency: (currency: Currencies) => void;
}

const useCurrencies = ({
    handleSelectCurrency
}: Props) => {
    const [currencies, setCurrencies] = useState<Currencies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleGetCurrencies = async () => {
        const { data } = await PaymentServices.getCurrencies()

        if (!!data?.length) {
            setCurrencies(data || [])
            handleSelectCurrency(data[1])
        } else {
            Alert.alert("Error", "Something went wrong")
        }
        setTimeout(() => setIsLoading(false), 3000)
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
