import styles from "./SelectableAction.styles";
import { Image, ImageSourcePropType, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Props {
    handlePress: () => void;
    image: ImageSourcePropType;
    label: string;
    OptionalChildren?: JSX.Element;
    rightComponent?: React.ReactNode;
    selected?: boolean;
    showOptionalComponent?: boolean;
}

const SelectableAction = ({
    handlePress,
    image,
    label,
    OptionalChildren,
    rightComponent,
    selected,
    showOptionalComponent,
}: Props) => {
    const onHandlePress = () => {
        if (OptionalChildren) return
        handlePress()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onHandlePress} style={[styles.touchable, selected && styles.touchableSelected, rightComponent && styles.touchableRight]}>
                <Image
                    source={image}
                    style={styles.image}
                />
                {
                    showOptionalComponent && OptionalChildren
                        ? OptionalChildren
                        : <Text style={styles.label}>
                            {label}
                        </Text>
                }
            </TouchableOpacity>
            {rightComponent}
        </View>
    );
}

export default SelectableAction;
