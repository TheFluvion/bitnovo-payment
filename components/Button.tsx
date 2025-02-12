import { COLORS, SIZE } from "@/constants/Theme/Theme"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { ButtonProps, Image, ImageSourcePropType, Text, TouchableOpacity, ViewStyle } from "react-native"

interface Props extends ButtonProps {
    disabled?: boolean
    handlePress?: () => void
    customStyle?: ViewStyle
    image?: ImageSourcePropType
}

const Button = ({
    disabled,
    customStyle,
    handlePress,
    image,
    ...props
}: Props) => {
    return (
        <TouchableOpacity
            {...props}
            style={[styles.button, disabled && styles.buttonDisabled, customStyle]}
            onPress={handlePress}
            disabled={disabled}
        >
            {
                image ? <Image
                    source={image}
                    style={styles.image}
                />
                    : <Text
                        style={[styles.label, disabled && styles.labelDisabled]}
                    >
                        {props.title}
                    </Text>
            }
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
        color: COLORS.font_color,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default Button