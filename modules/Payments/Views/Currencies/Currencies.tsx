import { Text, View } from "react-native"
import useCurrencies from "../../hooks/useCurrencies"
import { ComponentsProps } from "../../constants/types"
import Currency from "../../components/Currency"
import styles from "./Currencies.styles"
import CurrenciesSkeleton from "../../components/CurrenciesSkeleton"
import Header from "../../components/Header"
import CurrencySelect from "../../components/CurrencySelect"

const Currencies = ({
    handleSelectCurrency,
    form,
}: ComponentsProps) => {
    const { currencies, isLoading } = useCurrencies({
        handleSelectCurrency
    })

    if (isLoading) return <CurrenciesSkeleton />

    return (
        <View style={styles.container}>
            <Header
                showBackButton
                title="Selecciona una divisa"
                rightComponent={<CurrencySelect
                    selectedCurrency={form.selected_currency}
                    handlePress={() => { }}
                />
                }
            />
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
