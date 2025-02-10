import { View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"
import Currencies from "./Views/Currencies"
import InputText from "@/components/InputText"
import { useState } from "react"
import InputNumber from "@/components/InputNumber"

const Payments = () => {
    const { form, handleSelectCurrency } = usePaymentsController()
    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <InputNumber
                value={text}
                onChangeText={setText}
                currency="$"
            />

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
        alignItems: "center",
    },
})

export default Payments
