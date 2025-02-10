import { Image, Text, TouchableOpacity, View } from "react-native"
import { Currencies } from "../../constants/types"
import styles from "./Currency.styles"

interface Props extends Currencies {
    handlePress: () => void;
    selected: boolean;
}
//change component name to OptionItem
const Currency = ({
    image,
    name,
    symbol,
    handlePress,
    selected,
}: Props) => {
    const tick = selected ? require("@/assets/images/icon-tick-circle.png") : require("@/assets/images/icon-arrow-right.png")

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.container}
        >
            <Image
                source={{ uri: image }}
                width={720}
                height={720}
                style={styles.image}
            />
            <View>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.symbol}>
                    {symbol}
                </Text>
            </View>
            <Image
                source={tick}
                width={32}
                height={32}
                style={styles.arrow}
            />
        </TouchableOpacity>
    )
}

export default Currency
