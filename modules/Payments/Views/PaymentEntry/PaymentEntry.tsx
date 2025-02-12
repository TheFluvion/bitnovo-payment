import { ActivityIndicator, ImageSourcePropType, Modal, View } from "react-native";
import styles from "./PaymentEntry.style";
import Header from "../../../../components/Header";
import CurrencySelect from "../../components/CurrencySelect";
import { ViewsProps } from "../../constants/types";
import InputNumber from "@/components/InputNumber";
import { COLORS } from "@/constants/Theme/Theme";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import OptionItemList from "@/components/OptionItemList";
import useCurrencies from "../../hooks/useCurrencies";

const MOCKED_IMAGE_REQUIRED: Record<string, ImageSourcePropType> = {
    USD: require("@/assets/images/icon-usa.png"),
    EUR: require("@/assets/images/icon-euro.png"),
    GBP: require("@/assets/images/icon-pound.png"),
}

const PaymentEntry = ({
    form,
    handlePressBackButton = () => { },
    handleChangeFrom,
    handleSelectCurrency,
    isOpen,
    handleClose,
}: ViewsProps) => {
    const { filterCurrencies, isLoading, handleChangeCurrency, handleChangeSearchQuery } = useCurrencies({
        handleSelectCurrency,
        handleClose
    })

    return (
        <View style={styles.container}>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={false}
            >
                <OptionItemList
                    title="Selecciona una divisa"
                    handleBackButton={handleClose}
                    handleSelectOption={handleChangeCurrency}
                    handleSearchChange={handleChangeSearchQuery}
                    mockedImageRequired={MOCKED_IMAGE_REQUIRED}
                    optionItemList={filterCurrencies}
                    selectedOptionId={form.selected_currency.currency}
                    isLoading={isLoading}
                />
            </Modal>
            <Header
                title="Importe a pagar"
                rightComponent={
                    <CurrencySelect
                        handlePress={handlePressBackButton}
                        selectedCurrency={form.selected_currency}
                    />
                }
            />
            <View style={styles.inputContent}>
                <InputNumber
                    value={form.amount}
                    handleChange={(value) => handleChangeFrom('amount', value)}
                    customPlaceholder={{
                        color: COLORS.primary,
                        text: '0.00'
                    }}
                    currency={form.selected_currency.symbol}
                />
                <InputText
                    value={form.description}
                    handleChange={(value) => handleChangeFrom('description', value)}
                    placeholder="Añade descripción del pago"
                    label="Concepto"
                    maxLength={140}
                />
            </View>
        </View>
    );
}

export default PaymentEntry;
