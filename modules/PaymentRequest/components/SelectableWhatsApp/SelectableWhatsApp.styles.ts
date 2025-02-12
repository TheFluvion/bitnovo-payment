import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
    },
    content: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    touchable: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        color: COLORS.font_color,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    icon: {
        width: 14,
        height: 14,
    },
    input: {
        borderWidth: 0,
        borderColor: COLORS.transparent,
        backgroundColor: COLORS.transparent,
        padding: 0,
        margin: 0,
        height: 30,
    },
    containerStyle: {
        width: '60%'
    },
    button: {
        width: 53,
        height: 24,
        paddingVertical: 0,
        paddingHorizontal: 0,
        zIndex: 10,
    }
})

export default styles;
