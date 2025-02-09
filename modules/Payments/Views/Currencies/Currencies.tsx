import { Text, View } from "react-native"
import useCurrencies from "../../hooks/useCurrencies"
import { ComponentsProps } from "../../constants/types"
import Currency from "../../components/Currency"
import styles from "./Currencies.styles"

const Currencies = ({
    handleSelectCurrency,
    form,
}: ComponentsProps) => {
    const { currencies, isLoading } = useCurrencies({
        handleSelectCurrency
    })

    if (isLoading) return <Text>Loading...</Text>

    return (
        <View style={styles.container}>
            {currencies.map((currency) => (
                <Currency
                    key={currency.blockchain}
                    {...currency}
                    handlePress={() => handleSelectCurrency(currency)}
                    selected={form.selected_currency.blockchain === currency.blockchain}
                />
            ))}
        </View>
    )
}

export default Currencies
