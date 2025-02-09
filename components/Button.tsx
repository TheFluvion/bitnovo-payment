import { COLORS, SIZE } from "@/constants/Theme/Theme"
import createStyleSheet from "@/utils/CreateStyleSheet"
import { Text, TouchableOpacity } from "react-native"

interface Props {
    label: string,
    disabled?: boolean
    handlePress?: () => void
}

const Button = ({
    label,
    disabled,
    handlePress
}: Props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
            disabled={disabled}
        >
            <Text
                style={styles.label}
            >
                {label}
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
    label: {
        fontSize: SIZE.label,
        color: COLORS.white,
        fontWeight: '600',
    }
})

export default Button