import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        width: "100%",
        height: 56,
        margin: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderBottomColor: COLORS.border_color,
        borderBottomWidth: 1,
    },
    leftComponent: {
        width: 24,
        height: 24,
    },
    backButton: {
        borderRadius: 50,
        backgroundColor: COLORS.border_color,
        padding: 4,
    },
    image: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: SIZE.subtitle,
        fontWeight: "bold",
    }
});

export default styles;
