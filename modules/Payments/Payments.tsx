import { View } from "react-native"
import usePaymentsController from "./usePaymentsController"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { COLORS } from "@/constants/Theme/Theme"
import Currencies from "./Views/Currencies"
import Button from "@/components/Button"

const Payments = () => {
    const {
        form,
        handleSelectCurrency,
        CustomModal,
        handleClose,
        handleOpen
    } = usePaymentsController()

    return (
        <View style={styles.container}>
            <CustomModal>
                <Currencies
                    handleSelectCurrency={handleSelectCurrency}
                    form={form}
                    handlePressBackButton={handleClose}
                />
            </CustomModal>
            <Button
                label="Show Modal"
                handlePress={handleOpen}
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
