import { COLORS } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    inputContent: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 50,
        gap: 50,
    },
})

export default styles;
