import useModal from "@/hooks/useModal";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Alert, Modal, Text } from "react-native";
import { INITIAL_OPTION_INDEX, MOCKED_IMAGE_REQUIRED, OptionItemTypeIndex, SelectableActionType } from "./constants/types";
import OptionItemList from "@/components/OptionItemList";
import { OptionItemType } from "@/components/OptionItemList/OptionItemList";
import PaymentServices from "@/services/PaymentServices";
import SelectableWhatsApp from "./components/SelectableWhatsApp";

const getSelectableAction = ({
    image,
    label,
    handlePress,
    OptionalComponent,
}: SelectableActionType): SelectableActionType => {
    return {
        image,
        label,
        handlePress,
        OptionalComponent,
    }
}

const usePaymentRequestController = () => {
    const { amount, description, currency, paymentId } = useLocalSearchParams();
    console.log(amount, description, currency)
    const [countries, setCountries] = useState<OptionItemType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<OptionItemTypeIndex>(INITIAL_OPTION_INDEX);
    const [querySearch, setQuerySearch] = useState<string>("");

    const { handleClose, handleOpen, isOpen } = useModal();

    const getCountries = async () => {
        const { data } = await PaymentServices.getCountries();
        if (data) {
            setCountries(data);
        } else {
            Alert.alert("Error", "No se pudo obtener la lista de países");
        }
        setIsLoading(false);
    }

    const handleChangeQuerySearch = (value: string) => {
        setQuerySearch(value);
    }

    const handleSelectOption = (option: OptionItemType | null, index: number) => {
        setSelectedOption({
            index,
            symbol: option?.symbol || selectedOption.symbol,
            name: option?.name || selectedOption.name,
            image: option?.image || selectedOption.image,
            id: option?.id || selectedOption.id,
        });
    }

    useEffect(() => {
        getCountries();
    }, [])

    const arraySelectableAction = useMemo((): SelectableActionType[] => {
        const linkQrCode = getSelectableAction({
            image: require("@/assets/images/icon-link.png"),
            label: `pay.bitnovo.com/${currency}`,
            handlePress: () => console.log("QR code"),
        });
        const email = getSelectableAction({
            image: require("@/assets/images/icon-mail.png"),
            label: "Enviar por correo electrónico",
            handlePress: () => console.log("Email"),
        });
        const whatsApp = getSelectableAction({
            image: require("@/assets/images/icon-whatsapp.png"),
            label: "Enviar a número de WhatsApp",
            handlePress: () => {
                handleSelectOption(null, 2);
                handleOpen();
            },
            OptionalComponent: <SelectableWhatsApp
                id={selectedOption.id}
                handlePress={handleOpen}
            />,
        });
        const othersApps = getSelectableAction({
            image: require("@/assets/images/icon-export.png"),
            label: "Compartir con otras aplicaciones",
            handlePress: () => console.log("Others apps"),
        });

        return [linkQrCode, email, whatsApp, othersApps];
    }, [selectedOption, isOpen])

    const filteredOptions = useMemo(() => {
        return countries.filter(country => country.name.toLowerCase().includes(querySearch.toLowerCase()));
    }, [querySearch, countries])

    const CustomModal = () => {
        return <Modal
            visible={isOpen}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <OptionItemList
                title="Seleccionar país"
                handleBackButton={handleClose}
                handleSelectOption={(option) => { handleSelectOption(option, 2), handleClose() }}
                optionItemList={filteredOptions}
                handleSearchChange={handleChangeQuerySearch}
                selectedOptionId={selectedOption.id}
                isLoading={isLoading}
                mockedImageRequired={MOCKED_IMAGE_REQUIRED}
            />
        </Modal>
    }

    return {
        selectedOption,
        arraySelectableAction,
        CustomModal,
    }
}

export default usePaymentRequestController;
