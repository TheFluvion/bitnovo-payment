import { Modal, View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"
import Currencies from "./Views/Currencies"
import Button from "@/components/Button"
import PaymentEntry from "./Views/PaymentEntry"

const Payments = () => {
    const {
        form,
        isOpen,
        handleChangeFrom,
        handleSelectCurrency,
        handleClose,
        handleOpen,
        handleContinue,
    } = usePaymentsController()

    return (
        <View style={styles.container}>
            <PaymentEntry
                form={form}
                handlePressBackButton={handleOpen}
                handleSelectCurrency={handleSelectCurrency}
                handleChangeFrom={handleChangeFrom}
                handleClose={handleClose}
                isOpen={isOpen}
                handleContinue={handleContinue}
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
        justifyContent: "center",
    },
})

export default Payments
