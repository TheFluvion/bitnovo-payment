import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        width: "100%",
        paddingHorizontal: 16,
    }
})

export default styles;
