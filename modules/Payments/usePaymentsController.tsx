import useStepNavigation from "@/hooks/useStepNavigation";
import request from "@/services/request";
import { useEffect, useState } from "react";
import { Currencies, Form, FormKeys, INITIAL_FORM } from "./constants/types";
import { Alert } from "react-native";

const usePaymentsController = () => {
    const [form, setForm] = useState<Form>(INITIAL_FORM);
    const [currencies, setCurrencies] = useState<Currencies[]>([])
    const { currentStep, goBack, goFinalStep, goToNextStep, handleCurrentStep } = useStepNavigation({
        flowSteps: ["step1", "step2", "step3"]
    })

    const handleChangeFrom = (key: FormKeys, value: number | string | Currencies) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const handleGetCurrencies = async () => {
        const { data } = await request<Currencies[]>("https://payments.pre-bnvo.com/api/v1/currencies", {
            method: "GET"
        })

        if (!!data?.length) {
            setCurrencies(data || [])
            handleSelectCurrency(data[2])
        } else {
            Alert.alert("Error", "Something went wrong")
        }
    }

    const handleSelectCurrency = (currency: Currencies) => {
        setForm({
            ...form,
            selected_currency: currency
        })
    }

    useEffect(() => {
        handleGetCurrencies()
    }, [])

    return {
        form,
        currencies,
        handleSelectCurrency,
        handleChangeFrom,
    }
}

export default usePaymentsController
