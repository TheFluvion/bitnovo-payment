import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import styles from "./OptionItem.styles"

interface Props {
    handlePress: () => void;
    selected: boolean;
    name: string;
    label: string;
    image: ImageSourcePropType;
}

const OptionItem = ({
    name,
    label,
    selected,
    image,
    handlePress,
}: Props) => {
    const tick = selected ? require("@/assets/images/icon-tick-circle.png") : require("@/assets/images/icon-arrow-right.png")
    const sliceName = name.slice(0, 25) + '...'

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.container}
        >
            <Image
                source={image}
                width={720}
                height={720}
                style={styles.image}
            />
            <View>
                <Text style={styles.name}>
                    {name.length > 25 ? sliceName : name}
                </Text>
                <Text style={styles.symbol}>
                    {label}
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

export default OptionItem
