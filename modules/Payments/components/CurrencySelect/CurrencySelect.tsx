import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./CurrencySelect.style";
import { Currencies } from "../../constants/types";

interface Props {
    selectedCurrency: Currencies;
    handlePress: () => void;
}

const CurrencySelect = ({
    selectedCurrency,
    handlePress
}: Props) => {
    const label = selectedCurrency.blockchain.split("_")[0];
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
        >
            <Text style={styles.text}>
                {label}
            </Text>
            <Image
                source={require("@/assets/images/icon-arrow-down.png")}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

export default CurrencySelect;

