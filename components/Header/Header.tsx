import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./Header.style";

interface Props {
    handleBackButton?: () => void;
    showBackButton?: boolean;
    title?: string;
    rightComponent?: React.ReactNode;
    hideBottomLine?: boolean;
}

const Header = ({
    handleBackButton,
    showBackButton,
    title,
    rightComponent,
    hideBottomLine,
}: Props) => {
    return (
        <View style={styles.container}>
            {!hideBottomLine && <View style={styles.bottomLine} />}
            {
                showBackButton
                    ? <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleBackButton}
                    >
                        <Image
                            source={require("@/assets/images/icon-arrow-left.png")}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    : <View style={styles.sideContent} />
            }
            <Text style={styles.title}>
                {title}
            </Text>
            {
                rightComponent
                    ? rightComponent
                    : <View style={styles.sideContent} />
            }
        </View>
    );
}

export default Header;
