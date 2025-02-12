import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";
import { View } from "react-native";
import usePaymentRequestController from "./usePaymentRequestController";
import PaymentRequestCard from "./components/PaymentRequestCard";
import SelectableAction from "@/components/SelectableAction";

const PaymentRequest = () => {
    const { arraySelectableAction, selectedOption, CustomModal } = usePaymentRequestController()

    return (
        <View style={styles.container}>
            <CustomModal />
            <PaymentRequestCard amount={100} currency="USD" />
            {
                arraySelectableAction.map((action, index) => (
                    <SelectableAction
                        key={index}
                        image={action.image}
                        label={action.label}
                        handlePress={action.handlePress}
                        selected={selectedOption.index === index}
                        OptionalChildren={selectedOption.index === index ? action.OptionalComponent : undefined}
                        showOptionalComponent={selectedOption.index === index && !!action.OptionalComponent}
                    />
                ))
            }
        </View>
    )
}

const styles = createStyleSheet({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "flex-start",
        borderColor: COLORS.border_color,
        borderTopWidth: 1,
        gap: 20,
    },
})

export default PaymentRequest;
