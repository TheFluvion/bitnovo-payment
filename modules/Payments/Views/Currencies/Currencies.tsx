import { ImageSourcePropType, Text, View } from "react-native"
import useCurrencies from "../../hooks/useCurrencies"
import { ComponentsProps, CurrencyType } from "../../constants/types"
import OptionItem from "../../components/OptionItem"
import styles from "./Currencies.styles"
import CurrenciesSkeleton from "../../components/CurrenciesSkeleton"
import Header from "../../components/Header"
import CurrencySelect from "../../components/CurrencySelect"

const MOCKED_IMAGE_REQUIRED: Record<CurrencyType, ImageSourcePropType> = {
    USD: require("@/assets/images/icon-usa.png"),
    EUR: require("@/assets/images/icon-euro.png"),
    GBP: require("@/assets/images/icon-pound.png"),
}

const Currencies = ({
    handleSelectCurrency,
    form,
    handlePressBackButton,
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
                handleBackButton={handlePressBackButton}
            />
            {currencies.map((singleCurrency) => (
                <OptionItem
                    key={singleCurrency.currency}
                    handlePress={() => handleSelectCurrency(singleCurrency)}
                    selected={form.selected_currency.currency === singleCurrency.currency}
                    name={singleCurrency.name}
                    label={singleCurrency.currency}
                    image={MOCKED_IMAGE_REQUIRED[singleCurrency.currency]}
                />
            ))}
        </View>
    )
}

export default Currencies
