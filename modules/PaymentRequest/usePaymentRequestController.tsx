import useModal from "@/hooks/useModal";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Alert, Linking, Modal, Text } from "react-native";
import { INITIAL_OPTION_INDEX, MOCKED_IMAGE_REQUIRED, OptionItemTypeIndex, SelectableActionType } from "./constants/types";
import OptionItemList from "@/components/OptionItemList";
import { OptionItemType } from "@/components/OptionItemList/OptionItemList";
import PaymentServices from "@/services/PaymentServices";
import SelectableWhatsApp from "./components/SelectableWhatsApp";
import { MAIL_BASE_URL, WEBSOCKET_URL } from "@/constants/services";
import Button from "@/components/Button";
import { getSelectableAction } from "./utils";
import { CurrencyType } from "@/types/payment";
import useWebSocket from "@/hooks/useWebSocket";

interface Params {
    amount: number
    description: string
    currency: CurrencyType
    identifier: string
    web_url: string
}

const usePaymentRequestController = () => {
    const rawParams = useLocalSearchParams();
    const params = rawParams as unknown as Params;
    const router = useRouter();
    const { isConnected, messages, sendMessage, disconnected } = useWebSocket(`${WEBSOCKET_URL}${params.identifier}`);
    const [countries, setCountries] = useState<OptionItemType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<OptionItemTypeIndex>(INITIAL_OPTION_INDEX);
    const [querySearch, setQuerySearch] = useState<string>("");

    const { handleClose: handleCloseItemsModal, handleOpen: handleOpenItemsModal, isOpen } = useModal();

    useEffect(() => {
        if (disconnected) {
            Alert.alert("Error", "Se ha perdido la conexión con el servidor");
            setTimeout(() => {
                router.back();
            }, 1500);
        }
    }, [disconnected])

    useEffect(() => {
        handleVerifyMessage(messages[messages.length - 1]);
    }, [messages])

    const handleVerifyMessage = (message: string) => {
        if (message === "success_payment") {
            router.push('/(payments)/success_payment')
            return
        }
        if (message === "canceled") {
            router.back()
            return
        }
    }

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
            label: `${params.web_url}`,
            handlePress: () => Linking.openURL(`${params.web_url}`),
            rightComponent: <Button
                title="Copiar"
                handlePress={() => console.log("Open QR code")}
                image={require('@assets/images/icon-scan-barcode.png')}
                customStyle={{
                    width: 56,
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                }}
            />,
        });
        const email = getSelectableAction({
            image: require("@/assets/images/icon-mail.png"),
            label: "Enviar por correo electrónico",
            handlePress: () => Linking.openURL(MAIL_BASE_URL),
        });
        const whatsApp = getSelectableAction({
            image: require("@/assets/images/icon-whatsapp.png"),
            label: "Enviar a número de WhatsApp",
            handlePress: () => {
                handleSelectOption(null, 2);
                handleOpenItemsModal();
            },
            OptionalComponent: <SelectableWhatsApp
                id={selectedOption.id}
                handlePress={handleOpenItemsModal}
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

    const OptionItemListModal = () => {
        return <Modal
            visible={isOpen}
            animationType="slide"
            onRequestClose={handleCloseItemsModal}
        >
            <OptionItemList
                title="Seleccionar país"
                handleBackButton={handleCloseItemsModal}
                handleSelectOption={(option) => { handleSelectOption(option, 2), handleCloseItemsModal() }}
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
        params: params as Params,
        OptionItemListModal,
    }
}

export default usePaymentRequestController;
