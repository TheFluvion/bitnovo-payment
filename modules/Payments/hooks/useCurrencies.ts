import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Currencies } from "../constants/types";
import request from "@/services/request";
import PaymentServices from "@/services/PaymentServices";

interface Props {
    handleSelectCurrency: (currency: Currencies) => void;
    handleClose: () => void;
}

const useCurrencies = ({
    handleSelectCurrency,
    handleClose
}: Props) => {
    const [currencies, setCurrencies] = useState<Currencies[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleGetCurrencies = async () => {
        const { data } = await PaymentServices.getCurrencies()

        if (!!data?.length) {
            setCurrencies(data)
            handleSelectCurrency(data[0])
        } else {
            Alert.alert("Error", "Something went wrong")
        }
        setTimeout(() => setIsLoading(false), 3000)
    }

    const handleChangeCurrency = (currency: Currencies) => {
        handleSelectCurrency(currency)
        handleClose()
    }

    useEffect(() => {
        handleGetCurrencies()
    }, [])

    return {
        currencies,
        isLoading,
        handleChangeCurrency
    };
}

export default useCurrencies
