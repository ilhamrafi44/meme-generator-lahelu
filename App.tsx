import React from 'react';
import { SafeAreaView } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <SafeAreaView>
      <Button label="Test Button" onPress={() => console.log('Pressed')} />
    </SafeAreaView>
  );
}
