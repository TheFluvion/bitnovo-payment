import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { Currencies } from "../constants/types";
import request from "@/services/request";
import PaymentServices from "@/services/PaymentServices";
import { OptionItemType } from "@/components/OptionItemList/OptionItemList";

interface Props {
    handleSelectCurrency: (currency: Currencies) => void;
    handleClose: () => void;
}

const useCurrencies = ({
    handleSelectCurrency,
    handleClose
}: Props) => {
    const [currencies, setCurrencies] = useState<OptionItemType[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleGetCurrencies = async () => {
        const { data } = await PaymentServices.getCurrencies()

        if (!!data?.length) {
            const formattedData = formatCurrencies(data)
            setCurrencies(formattedData)
            handleSelectCurrency(data[0])
        } else {
            Alert.alert("Error", "Something went wrong")
        }
        setTimeout(() => setIsLoading(false), 3000)
    }

    const handleChangeCurrency = (selectedCurrency: OptionItemType) => {
        const currency: Currencies = {
            currency: selectedCurrency.id,
            name: selectedCurrency.name,
            symbol: selectedCurrency.symbol,
            image: selectedCurrency.image,
        }
        handleSelectCurrency(currency)
        handleClose()
    }

    const handleChangeSearchQuery = (text: string) => {
        setSearchQuery(text)
    }

    const filterCurrencies = useMemo(() => {
        const filteredCurrencies = currencies.filter((currency) => {
            return currency.name.toLowerCase().includes(searchQuery.toLowerCase())
        })

        return filteredCurrencies
    }, [searchQuery, currencies])

    const formatCurrencies = (currencies: Currencies[]): OptionItemType[] => {
        return currencies.map((currency) => ({
            ...currency,
            id: currency.currency
        }))
    }

    useEffect(() => {
        handleGetCurrencies()
    }, [])

    return {
        currencies,
        filterCurrencies,
        isLoading,
        handleChangeSearchQuery,
        handleChangeCurrency
    };
}

export default useCurrencies
