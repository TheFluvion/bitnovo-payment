import { COLORS, SIZE } from "@/constants/Theme/Theme";
import createStyleSheet from "@/utils/CreateStyleSheet";

const styles = createStyleSheet({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        position: 'relative',
    },
    name: {
        fontSize: SIZE.label,
        fontWeight: 'bold',
        color: COLORS.font_color,
    },
    symbol: {
        fontSize: SIZE.label,
        color: COLORS.font_color,
    },
    image: {
        borderRadius: 50,
        width: 32,
        height: 32,
    },
    arrow: {
        position: 'absolute',
        right: 20,
        top: '50%',
        width: 16,
        height: 16,
    },
});

export default styles;
