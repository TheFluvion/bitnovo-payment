import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        padding: 8,
        backgroundColor: COLORS.shadow_background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        borderRadius: 24
    },
    text: {
        fontSize: SIZE.span,
        color: COLORS.font_color,
    },
    image: {
        width: 16,
        height: 16,
    }
})

export default styles;
