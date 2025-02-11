import { COLORS, SIZE } from "@/constants/Theme/Theme"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { ButtonProps, Text, TouchableOpacity, ViewStyle } from "react-native"

interface Props extends ButtonProps {
    disabled?: boolean
    handlePress?: () => void
    customStyle?: ViewStyle
}

const Button = ({
    disabled,
    customStyle,
    handlePress,
    ...props
}: Props) => {
    return (
        <TouchableOpacity
            {...props}
            style={[styles.button, disabled && styles.buttonDisabled, customStyle]}
            onPress={handlePress}
            disabled={disabled}
        >
            <Text
                style={[styles.label, disabled && styles.labelDisabled]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = createStyleSheet({
    button: {
        width: '100%',
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    buttonDisabled: {
        backgroundColor: COLORS.disabled_button,
    },
    label: {
        fontSize: SIZE.label,
        color: COLORS.white,
        fontWeight: '600',
    },
    labelDisabled: {
        color: COLORS.disabled_button_text,
    },
})

export default Button