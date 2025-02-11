import { COLORS, SIZE } from "@/constants/Theme/Theme"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { Text, TextInput, TextInputProps, View } from "react-native"

type Placeholder = {
    text?: string
    color: string
}

interface Props extends TextInputProps {
    currency?: string
    customPlaceholder?: Placeholder
    handleChange: (value: string) => void
}

const InputNumber = ({
    currency,
    customPlaceholder,
    handleChange,
    ...props
}: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                onChangeText={handleChange}
                style={[styles.input, props.value === '0' && styles.zero_value]}
                keyboardType="numeric"
                placeholder={customPlaceholder?.text}
                placeholderTextColor={customPlaceholder?.color || COLORS.disabled_text_color}
            />
            <Text style={[styles.currency, props.value === '0' && styles.zero_value]}>
                {currency}
            </Text>
        </View>
    )
}

const styles = createStyleSheet({
    container: {
        width: "100%",
        position: "relative",
        paddingTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: COLORS.primary,
        fontSize: SIZE.money,
        fontWeight: "bold",
    },
    currency: {
        color: COLORS.primary,
        fontSize: SIZE.money,
        fontWeight: "bold",
    },
    zero_value: {
        color: COLORS.disabled_text_color,
        fontSize: SIZE.money,
    },
})

export default InputNumber
