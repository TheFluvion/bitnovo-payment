import { ImageSourcePropType, View } from "react-native"
import OptionItem from "../OptionItem"
import styles from "./OptionItemList.style"
import Header from "@/components/Header"
import InputText from "../InputText";
import OptionItemListSkeleton from "../OptionItemListSkeleton";

type MockedImageRequired = Record<string, ImageSourcePropType>

export interface OptionItemType {
    symbol: string;
    name: string;
    image: string;
    id: string;
}

interface Props {
    handleBackButton: () => void;
    handleSelectOption: (optionItem: OptionItemType) => void;
    handleSearchChange: (text: string) => void;
    optionItemList: OptionItemType[];
    selectedOptionId: string;
    mockedImageRequired: MockedImageRequired;
    isLoading: boolean;
}

const OptionItemList = ({
    handleBackButton,
    handleSelectOption,
    handleSearchChange,
    optionItemList,
    selectedOptionId,
    mockedImageRequired,
    isLoading,
}: Props) => {
    if (isLoading) return <OptionItemListSkeleton />

    return (
        <View style={styles.container}>
            <Header
                title="Selecciona una divisa"
                handleBackButton={handleBackButton}
                showBackButton
                hideBottomLine
            />
            <View style={styles.content}>
                <InputText
                    placeholder="Buscar"
                    showIcon
                    handleChange={handleSearchChange}
                />
                {optionItemList.map((optionItem) => (
                    <OptionItem
                        key={optionItem.id}
                        handlePress={() => handleSelectOption(optionItem)}
                        selected={selectedOptionId === optionItem.id}
                        name={optionItem.name}
                        label={optionItem.id}
                        image={mockedImageRequired[optionItem.id]}
                    />
                ))}
            </View>
        </View>
    )
}

export default OptionItemList
