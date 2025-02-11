import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = createStyleSheet({
    container: {
        width: "100%",
        height: 56,
        margin: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    bottomLine: {
        position: "absolute",
        bottom: 0,
        left: -16,
        width: width,
        height: 1,
        backgroundColor: COLORS.border_color,
    },
    sideContent: {
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
