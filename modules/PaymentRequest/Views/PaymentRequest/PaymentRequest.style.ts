import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.border_color,
        borderTopWidth: 1,
    },
})

export default styles;
