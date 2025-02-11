import { useState } from "react";
import { Currencies, Form, FormKeys, INITIAL_FORM } from "./constants/types";
import useModal from "@/hooks/useModal";
import { useRouter } from "expo-router";

const usePaymentsController = () => {
    const router = useRouter()
    const [form, setForm] = useState<Form>(INITIAL_FORM);
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

    const handleContinue = () => {
        router.push({
            pathname: '/(payments)/payment_request',
            params: {
                amount: form.amount,
                description: form.description,
                currency: form.selected_currency.currency,
            },
        });
    }

    return {
        form,
        isOpen,
        handleSelectCurrency,
        handleChangeFrom,
        handleClose,
        handleOpen,
        handleContinue,
    }
}

export default usePaymentsController
