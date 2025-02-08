import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const createStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(styles: T) => {
    return StyleSheet.create(styles);
};

export default createStyleSheet;
