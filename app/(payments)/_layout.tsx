import { Stack } from 'expo-router';

const PaymentsLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Payments',
                }}
            />
            <Stack.Screen
                name="payment_request"
                options={{
                    headerShown: false,
                    title: 'Payment Request',
                }}
            />
            <Stack.Screen
                name="success_payment"
                options={{
                    headerShown: false,
                    title: 'Payment Request',
                }}
            />
        </Stack>
    );
}

export default PaymentsLayout;