import { Tabs } from 'expo-router';

const PaymentsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Payments',
                    tabBarStyle: { display: 'none' },
                }}
            />
        </Tabs>
    );
}

export default PaymentsLayout;