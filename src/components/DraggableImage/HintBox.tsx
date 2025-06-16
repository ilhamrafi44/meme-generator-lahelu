import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function HintBox({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <View style={styles.hintBox}>
      <Text style={styles.hintText}>Drag corners to scale, edges to stretch, ↻ to rotate</Text>
    </View>
  );
}
