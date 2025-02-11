import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";
import { Image, Text, TextInput, View, TextInputProps, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface Props extends TextInputProps {
    showIcon?: boolean;
    label?: string;
    handleChange: (value: string) => void;
}

const InputText = ({
    onChangeText,
    showIcon = false,
    label,
    handleChange,
    ...props
}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            {showIcon && <Image
                source={require("@/assets/images/icon-search.png")}
                style={styles.image}
            />}
            <TextInput
                {...props}
                onChangeText={handleChange}
                style={[styles.input, showIcon && styles.inputWithIcon]}
            />
            {
                props.maxLength && (
                    <Text style={styles.maxLength}>
                        {props.value?.length || 0}/{props.maxLength} caracteres
                    </Text>
                )
            }
        </View>
    )
}

const styles = createStyleSheet({
    container: {
        width: "100%",
        position: "relative",
        paddingTop: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "100%",
        height: 56,
        margin: 8,
        padding: 8,
        backgroundColor: COLORS.white,
        borderBottomColor: COLORS.border_color,
        borderWidth: 1,
        borderRadius: 6,
    },
    inputWithIcon: {
        paddingLeft: 48,
    },
    label: {
        position: "absolute",
        top: 0,
        left: 8,
        backgroundColor: COLORS.white,
        paddingHorizontal: 4,
        fontSize: SIZE.label,
        color: COLORS.font_color,
        fontWeight: 700,
    },
    image: {
        position: "absolute",
        top: '50%',
        left: 20,
        width: 24,
        height: 24,
        zIndex: 10,
    },
    maxLength: {
        position: "absolute",
        bottom: -10,
        right: 0,
        fontSize: SIZE.span,
        color: COLORS.font_color,
    }
});

export default InputText;
