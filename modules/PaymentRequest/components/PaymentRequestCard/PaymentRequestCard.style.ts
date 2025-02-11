import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        width: "100%",
        backgroundColor: COLORS.shadow_background,
        borderRadius: 12,
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: COLORS.shadow_color,
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    iconContainer: {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 58,
        height: 58,
        resizeMode: "contain",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textContent: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    title: {
        fontSize: SIZE.label,
        color: COLORS.font_color,
    },
    amount: {
        fontSize: SIZE.title,
        fontWeight: "bold",
        color: COLORS.font_color,
    },
    subtitle: {
        fontSize: SIZE.span,
        color: COLORS.font_color,
    },
})

export default styles;
