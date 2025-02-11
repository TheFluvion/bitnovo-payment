import { useLocalSearchParams } from "expo-router";


const usePaymentRequestController = () => {
    const { amount, description, currency } = useLocalSearchParams();
    console.log(amount, description, currency)

    return {

    }
}

export default usePaymentRequestController;
