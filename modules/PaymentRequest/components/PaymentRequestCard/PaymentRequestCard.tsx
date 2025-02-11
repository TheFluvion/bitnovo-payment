import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./PaymentRequestCard.style";
import { CurrencyType } from "@/types/payment";
import { formatNumberToLocal } from "@/utils/FormatNumberToLoca";

interface Props {
    amount: number;
    currency: CurrencyType;
}

const CURRENCY_SYMBOLS: Record<CurrencyType, string> = {
    EUR: "€",
    GBP: "£",
    USD: "$",
};

const PaymentRequestCard = ({ amount, currency }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Image source={require("@/assets/images/icon-money-time.png")} style={styles.icon} />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Solicitud de pago</Text>
                    <Text style={styles.amount}>
                        {formatNumberToLocal(amount, 2, true)} {CURRENCY_SYMBOLS[currency]}
                    </Text>
                </View>
            </View>
            <Text style={styles.subtitle}>Comparte el enlace de pago con el cliente</Text>
        </View>
    );
};

export default PaymentRequestCard;
