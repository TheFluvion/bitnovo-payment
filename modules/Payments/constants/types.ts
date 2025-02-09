
interface Currencies {
    symbol: string;
    name: string;
    min_amount: string;
    max_amount: string;
    image: string;
    blockchain: string;
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
}

const INITIAL_FORM: Form = {
    selected_currency: {
        symbol: "",
        name: "",
        min_amount: "",
        max_amount: "",
        image: "",
        blockchain: "",
    },
    amount: 0,
    description: "",
}


export { Currencies, Form, FormKeys, ComponentsProps, INITIAL_FORM }