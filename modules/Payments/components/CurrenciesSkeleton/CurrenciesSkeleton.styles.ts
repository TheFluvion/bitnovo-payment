import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        backgroundColor: COLORS.white,
        padding: 16,
        gap: 8,
        width: "100%",
    },
    skeleton: {
        width: "100%",
        height: 50,
    }
})

export default styles;
