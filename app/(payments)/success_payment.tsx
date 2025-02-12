import Button from "@/components/Button";
import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

const SuccessPayment = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/(home)')
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/image-bitnovo-pay.png")}
                style={styles.bitnovo}
            />
            <Image
                source={require("@/assets/images/image-success.png")}
                style={styles.success}
            />
            <Button
                title="Finalizar"
                handlePress={handleGoHome}
            />
        </View>
    );
}

const styles = createStyleSheet({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: COLORS.border_color,
        borderTopWidth: 1,
        gap: 20,
    },
    bitnovo: {
        width: 88,
        height: 32,
    },
    success: {
        width: '100%',
        height: '70%',
    }
});

export default SuccessPayment;
