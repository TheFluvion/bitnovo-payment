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
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
        >
            <Text style={styles.text}>
                {selectedCurrency.currency}
            </Text>
            <Image
                source={require("@/assets/images/icon-arrow-down.png")}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

export default CurrencySelect;

