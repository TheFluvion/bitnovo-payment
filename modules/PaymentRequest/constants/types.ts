import { OptionItemType } from "@/components/OptionItemList/OptionItemList";
import { ImageSourcePropType } from "react-native";

interface SelectableActionType {
    image: ImageSourcePropType;
    label: string;
    handlePress: () => void;
    OptionalComponent?: JSX.Element;
}

const MOCKED_IMAGE_REQUIRED: Record<string, ImageSourcePropType> = {
    "+34": require("@assets/images/icon-spain.png"),
    "+240": require("@assets/images/icon-guinea.png"),
    "+30": require("@assets/images/icon-grecia.png"),
    "+500": require("@assets/images/icon-uk.png"),
    "+502": require("@assets/images/icon-guatemala.png"),
    "+592": require("@assets/images/icon-guyana.png"),
    "+852": require("@assets/images/icon-kong.png"),
    "+504": require("@assets/images/icon-honduras.png"),
    "+54": require("@assets/images/icon-argentina.png"),
};

interface OptionItemTypeIndex extends OptionItemType {
    index: number;
}

const INITIAL_OPTION_INDEX: OptionItemTypeIndex = {
    index: -1,
    symbol: "",
    name: "",
    image: "",
    id: "",
};

export { SelectableActionType, MOCKED_IMAGE_REQUIRED, OptionItemTypeIndex, INITIAL_OPTION_INDEX };