import { Image, Text, View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import Currency from "./components/Currency"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"

const Payments = () => {
    const { currencies, form, handleSelectCurrency } = usePaymentsController()

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

const styles = createStyleSheet({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.white,
    },
})

export default Payments
