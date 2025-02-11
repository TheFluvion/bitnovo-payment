type CurrencyType = 'USD' | 'EUR' | 'GBP'

const CURRENCY: Record<CurrencyType, CurrencyType> = {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
}

interface Currencies {
    symbol: string;
    name: string;
    image: string;
    currency: CurrencyType;
}

type FormKeys = "selected_currency" | "amount" | "description";

interface Form {
    selected_currency: Currencies;
    amount: number;
    description: string;
}

interface ComponentsProps {
    handleSelectCurrency: (currency: Currencies) => void;
    form: Form;
    handlePressBackButton?: () => void;
}

const INITIAL_FORM: Form = {
    selected_currency: {
        symbol: "",
        name: "",
        image: "",
        currency: CURRENCY.USD,
    },
    amount: 0,
    description: "",
}


export { Currencies, Form, FormKeys, ComponentsProps, CurrencyType, INITIAL_FORM, CURRENCY }