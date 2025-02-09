import { Tabs } from 'expo-router';

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}

export default HomeLayout;
