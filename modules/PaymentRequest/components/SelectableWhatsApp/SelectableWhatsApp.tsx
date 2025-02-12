import { Alert, Image, Linking, Text, Touchable, TouchableHighlight, View } from "react-native"
import styles from "./SelectableWhatsApp.styles"
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { WHATSAPP_BASE_URL } from "@/constants/services";

interface Props {
    id: string;
    handlePress: () => void;
}

const SelectableWhatsApp = ({
    id,
    handlePress,
}: Props) => {
    const [phone, setPhone] = useState<string>("")

    const handleChange = (value: string) => {
        setPhone(value)
    }

    const handleSubmit = () => {
        Linking.openURL(`${WHATSAPP_BASE_URL}${phone}`).catch(err => Alert.alert("Error", "No se pudo abrir WhatsApp"))
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableHighlight style={styles.touchable} onPress={handlePress}>
                    <>
                        <Text style={styles.text}>
                            {id}
                        </Text>
                        <Image
                            source={require("@/assets/images/icon-arrow-down.png")}
                            style={styles.icon}
                        />
                    </>
                </TouchableHighlight>
                <InputText
                    value={phone}
                    handleChange={handleChange}
                    placeholder="Escribe el número"
                    keyboardType="numeric"
                    style={styles.input}
                    containerStyle={styles.containerStyle}
                />
            </View>
            <Button
                title="Enviar"
                onPress={handleSubmit}
                customStyle={styles.button}
            />
        </View>
    )
}

export default SelectableWhatsApp
