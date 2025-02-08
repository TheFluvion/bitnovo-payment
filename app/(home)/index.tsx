import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView>
      <TouchableOpacity onPress={() => router.push('/(payments)')}>
        <Text>Buenas!</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
