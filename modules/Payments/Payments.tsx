import { ActivityIndicator, View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"
import PaymentEntry from "./Views/PaymentEntry"
import Button from "@/components/Button"

const Payments = () => {
    const {
        form,
        isOpen,
        isLoading,
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
            {
                isLoading
                    ? <ActivityIndicator style={styles.button} size="large" color={COLORS.primary} />
                    : <Button
                        title="Continuar"
                        handlePress={handleContinue}
                        customStyle={styles.button}
                        disabled={!form.amount}
                    />
            }
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
        position: "relative",
    },
    button: {
        position: "absolute",
        bottom: 16,
        width: "100%",
    }
})

export default Payments
