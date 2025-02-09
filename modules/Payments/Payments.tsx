import { Image, Text, View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import Currency from "./components/Currency"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"
import Currencies from "./Views/Currencies"

const Payments = () => {
    const { form, handleSelectCurrency } = usePaymentsController()

    return (
        <View style={styles.container}>
            <Currencies
                handleSelectCurrency={handleSelectCurrency}
                form={form}
            />
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
