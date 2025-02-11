import { CURRENCY, CurrencyType } from "@/types/payment";

interface Currencies {
    symbol: string;
    name: string;
    image: string;
    currency: CurrencyType;
}

type FormKeys = "selected_currency" | "amount" | "description";

interface Form {
    selected_currency: Currencies;
    amount: string;
    description: string;
}

interface ViewsProps {
    handleSelectCurrency: (currency: Currencies) => void;
    form: Form;
    handlePressBackButton?: () => void;
    handleChangeFrom: (key: FormKeys, value: number | string | Currencies) => void;
    isOpen: boolean;
    handleClose: () => void;
    handleContinue: () => void;
}

const INITIAL_FORM: Form = {
    selected_currency: {
        symbol: "$",
        name: "",
        image: "",
        currency: CURRENCY.USD,
    },
    amount: "",
    description: "",
}


export { Currencies, Form, FormKeys, ViewsProps, CurrencyType, INITIAL_FORM }