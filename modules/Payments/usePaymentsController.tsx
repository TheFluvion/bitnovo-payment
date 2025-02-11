import useStepNavigation from "@/hooks/useStepNavigation";
import { useState } from "react";
import { Currencies, Form, FormKeys, INITIAL_FORM } from "./constants/types";
import useModal from "@/hooks/useModal";

const usePaymentsController = () => {
    const [form, setForm] = useState<Form>(INITIAL_FORM);
    const [currencies, setCurrencies] = useState<Currencies[]>([])
    const { currentStep, goBack, goFinalStep, goToNextStep, handleCurrentStep } = useStepNavigation({
        flowSteps: ["step1", "step2", "step3"]
    })
    const { CustomModal, handleClose, handleOpen } = useModal()

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

    return {
        form,
        currencies,
        handleSelectCurrency,
        handleChangeFrom,
        CustomModal,
        handleClose,
        handleOpen,
    }
}

export default usePaymentsController
