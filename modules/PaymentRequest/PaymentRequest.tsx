import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";
import { View } from "react-native";
import usePaymentRequestController from "./usePaymentRequestController";
import PaymentRequestCard from "./components/PaymentRequestCard";

const PaymentRequest = () => {
    const { } = usePaymentRequestController()

    return (
        <View style={styles.container}>
            <PaymentRequestCard amount={100} currency="USD" />
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
    },
})

export default PaymentRequest;
