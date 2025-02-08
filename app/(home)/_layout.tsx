import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

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
