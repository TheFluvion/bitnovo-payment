import { useState } from "react";
import { Currencies, Form, FormKeys, INITIAL_FORM } from "./constants/types";
import useModal from "@/hooks/useModal";
import { useRouter } from "expo-router";
import PaymentServices from "@/services/PaymentServices";

const usePaymentsController = () => {
    const router = useRouter()
    const [form, setForm] = useState<Form>(INITIAL_FORM);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleClose, handleOpen, isOpen } = useModal()

    const handleChangeFrom = (key: FormKeys, value: number | string | Currencies) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const handleSelectCurrency = (currency: Currencies) => {
        setForm({
            ...form,
            selected_currency: currency
        })
    }

    const handleContinue = async () => {
        setIsLoading(true)
        const { data, status } = await PaymentServices.createOrder({
            expected_output_amount: Number(form.amount),
            fiat: form.selected_currency.symbol,
        })

        if (data) {
            const params = {
                amount: form.amount,
                description: form.description,
                currency: form.selected_currency.currency,
                identifier: data.identifier,
                web_url: data.web_url,
            }
            router.push({
                pathname: '/(payments)/payment_request',
                params: params,
            });
        }
        setIsLoading(false)
    }

    return {
        form,
        isOpen,
        isLoading,
        handleSelectCurrency,
        handleChangeFrom,
        handleClose,
        handleOpen,
        handleContinue,
    }
}

export default usePaymentsController
