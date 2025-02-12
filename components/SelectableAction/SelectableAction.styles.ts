import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        width: "100%",
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    touchable: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderColor: COLORS.border_color,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 18,
        gap: 12
    },
    touchableSelected: {
        borderColor: COLORS.primary,
    },
    image: {
        width: 20,
        height: 20,
    },
    label: {
        color: COLORS.font_color,
        fontSize: SIZE.label,
    },
});

export default styles;
