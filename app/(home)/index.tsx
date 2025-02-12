import { StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';
import { COLORS, FONT, SIZE, WEIGHT } from '@/constants/Theme/Theme';
import { HelloWave } from '@/components/HelloWave';
import Button from '@/components/Button';

export default function HomeScreen() {
  const router = useRouter();

  const handleCreatePayment = () => {
    router.push('/(payments)')
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.title}>WELCOME!</Text>
        <HelloWave />
      </View>
      <Button title="Generar pago" handlePress={handleCreatePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: SIZE.title,
    fontWeight: 'bold',
    fontFamily: FONT.mulish,
    color: COLORS.primary,
  },
});
