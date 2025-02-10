import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
        gap: 8,
    },
    skeleton: {
        width: "100%",
        height: 50,
    }
})

export default styles;
